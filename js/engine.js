const params = new URLSearchParams(window.location.search);
const scenarioId = params.get("id");

const textBox = document.getElementById("text");
const controlsBox = document.getElementById("controls");

let scenario = null;
let skipRequested = false;
let scenarioRunning = true;

async function init() {
    if (!scenarioId) {
        textBox.textContent = "No scenario was specified.";
        return;
    }

    try {
        await loadScenarioById(scenarioId);
    } catch (err) {
        console.error(err);
        textBox.textContent = "Scenario not found.";
        return;
    }

    const scenarios = Array.isArray(window.scenarios) ? window.scenarios : [];
    scenario = scenarios.find(s => s.id === scenarioId);

    await start();
}

async function start() {
    scenarioRunning = true;
    showControls();
    if (!scenario) {
        textBox.textContent = "Scenario not found.";
        return;
    }

    await playLines(scenario.intro);

    await wait(1000);
    
    await continuePrompt();

    await playLines(scenario.setup);

    await wait(1000);

    showChoices(scenario.choice);
}

function scrollDown() {
    window.scrollTo({
        top: document.body.scrollHeight - window.innerHeight + 90,
        behavior: "smooth"
    });
}

async function typeText(text, isTimestamp = false, container = textBox) {

    return new Promise(resolve => {

        const line = document.createElement("div");
        line.className = "story-line";
        line.style.whiteSpace = "pre-wrap";

        if (isTimestamp) {
            line.classList.add("timestamp");
        }

        const cursor = document.createElement("span");
        cursor.className = "cursor";
        cursor.textContent = "|";

        line.appendChild(cursor);
        container.appendChild(line);

        let i = 0;
        const speed = 35;

        function finish() {
            line.textContent = text;
            cursor.remove();
            scrollDown(line);
            resolve();
        }

        function typeNext() {
            if (skipRequested) {
                finish();
                return;
            }
            if (i >= text.length) {
                cursor.remove();
                scrollDown(line);
                resolve();
                return;
            }
            const char = text[i++];
            line.insertBefore(document.createTextNode(char), cursor);
            let delay = speed;
            if (char === "." || char === "!" || char === "?")
                delay = 300;
            setTimeout(typeNext, delay);
        }
        typeNext();
    });
}

async function typeHeading(text, container = textBox) {

    return new Promise(resolve => {

        const line = document.createElement("div");
        line.className = "section-title";
        line.style.whiteSpace = "pre-wrap";

        const cursor = document.createElement("span");
        cursor.className = "cursor";
        cursor.textContent = "|";

        line.appendChild(cursor);
        container.appendChild(line);

        let i = 0;
        const speed = 35;

        function finish() {
            line.textContent = text;
            resolve();
        }

        function typeNext() {

            if (skipRequested) {
                finish();
                return;
            }

            if (i >= text.length) {
                cursor.remove();
                resolve();
                return;
            }

            const char = text[i++];

            line.insertBefore(
                document.createTextNode(char),
                cursor
            );

            let delay = speed;

            if (
                char === "." ||
                char === "!" ||
                char === "?"
            ) {
                delay = 300;
            }

            setTimeout(typeNext, delay);
        }

        typeNext();
    });
}

async function playLines(lines, container = textBox) {
    if (!lines) return;
    for (let i = 0; i < lines.length; i++) {
        await typeText(lines[i], false, container);

        // User pressed Skip while this line was typing
        if (skipRequested) {
            // Show remaining lines instantly
            for (i = i + 1; i < lines.length; i++) {
                const line = document.createElement("div");
                line.className = "story-line";
                line.style.whiteSpace = "pre-wrap";
                line.textContent = lines[i];
                container.appendChild(line);
            }
            scrollDown();
            skipRequested = false;
            return;
        }
        await wait(700);
    }
}

async function playSection(lines) {
    await playLines(lines);
    await wait(700);
    await continuePrompt();
}

function showChoices(scene) {

    const wrapper = document.createElement("div");
    wrapper.className = "choice-container";

    const title = document.createElement("div");
    title.className = "choice-title";
    title.textContent = scene.text;

    wrapper.appendChild(title);

    scene.options.forEach(opt => {

        const btn = document.createElement("button");
        btn.className = "choice-button";
        btn.textContent = opt.text;

        btn.onclick = () => handleChoice(opt, wrapper);

        wrapper.appendChild(btn);

    });

    textBox.appendChild(wrapper);

    scrollDown();

}

async function showStoryTimeline(events) {

    const timeline = document.createElement("div");
    timeline.className = "timeline-container";

    textBox.appendChild(timeline);


    for (const event of events) {

        const eventBox = document.createElement("div");
        eventBox.className = "timeline-event";


        // Create heading container
        const heading = document.createElement("div");
        heading.className = "story-timeline-heading";

        eventBox.appendChild(heading);


        timeline.appendChild(eventBox);


        await typeHeading(
            `--- ${event.time.toUpperCase()} ---`,
            heading
        );


        const story = document.createElement("div");
        story.className = "timeline-story";

        eventBox.appendChild(story);


        await typeTimelineLines(
            event.story,
            story
        );


        await wait(700);
        await continuePrompt();
    }
}

async function continuePrompt() {

    return new Promise(resolve => {
        const wrapper = document.createElement("div");
        wrapper.className = "choice-container";

        const btn = document.createElement("button");
        btn.className = "continue-button choice-button";
        btn.textContent = "Continue";

        btn.onclick = () => {
            skipRequested = false;
            scrollDown();
            wrapper.remove();
            resolve();
        };

        wrapper.appendChild(btn);
        textBox.appendChild(wrapper);

        scrollDown();

    });

}

async function handleChoice(option, wrapper) {

    wrapper.innerHTML = `
        <div class="selected-choice">
            You chose:
            <strong>${option.text}</strong>
        </div>
    `;
    
    skipRequested = false;
    const outcome = option.outcome;

    if (!outcome || !Array.isArray(outcome)) {
        await typeText("Error: missing outcome data.");
        return;
    }

    for (const section of outcome) {

        // Normal text sections
        if (section.type === "text") {
            await playSection(section.text);
        } 
        
        // Timeline section
        else if (section.type === "timeline") {
            await showStoryTimeline(section.events);
        }
        
        // Investigation sections
        else if (section.type === "investigation") {

            await showInvestigation(section.data);

        }

    }

    scenarioRunning = false;
    showControls();

}

async function showInvestigation(data) {

    await typeHeading("FOLLOWING THE CYBER TRAIL");
    await wait(500);

    // Investigation introduction
    await playSection(data.intro);

    // Case files
    for (const clue of data.clues) {
        await showCaseFile(clue);
    }

    // Timeline reconstruction
    if (data.timelineIntro) {
        await playSection(data.timelineIntro);
    }

    if (data.timeline) {
        await showInvestigationTimeline(data.timeline);
    }

    // Final lesson
    await playLines(data.lesson);
}

async function askInvestigationQuestion(clue) {

    return new Promise(resolve => {

        const wrapper = document.createElement("div");
        wrapper.className = "choice-container";

        clue.options.forEach(option => {

            const btn = document.createElement("button");
            btn.className = "choice-button";
            btn.textContent = option.text;

            btn.onclick = async () => {
                skipRequested = false;
                wrapper.innerHTML = `
                    <div class="selected-choice">
                        > Selected Answer: \n
                        <strong>${option.text}</strong>
                    </div>
                `;

                if (option.correct) {

                    const result = document.createElement("div");
                    result.className = "correct-answer";
                    result.textContent = "[ VERIFIED ]";
                    wrapper.appendChild(result);

                    await playLines(option.investigatorResponse);
                    await playLines(option.explanation);

                    resolve();

                } else {

                    const result = document.createElement("div");
                    result.className = "incorrect-answer";
                    result.textContent = "[ INCORRECT ]";
                    wrapper.appendChild(result);

                    const feedback = document.createElement("div");
                    wrapper.appendChild(feedback);

                    await playLines(option.investigatorResponse, feedback);
                    await playLines(option.explanation, feedback);

                    const retry = document.createElement("button");
                    retry.className = "choice-button retry-button";
                    retry.textContent = "Try Again";
                    retry.onclick = () => {
                        wrapper.remove();
                        askInvestigationQuestion(clue).then(resolve);
                    };
                    wrapper.appendChild(retry);
                }
            };
            wrapper.appendChild(btn);
        });
        textBox.appendChild(wrapper);

        scrollDown();

    });

}

async function showCaseFile(clue) {
    const box = document.createElement("div");
    box.className = "case-file";

    const title = document.createElement("div");
    title.className = "case-file-title";
    title.textContent = clue.title;

    const evidenceTitle = document.createElement("div");
    evidenceTitle.className = "evidence-title";
    evidenceTitle.textContent = "EVIDENCE";

    const evidence = document.createElement("ul");
    evidence.className = "evidence-list";

    clue.evidence.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        evidence.appendChild(li);
    });

    box.appendChild(title);
    box.appendChild(evidenceTitle);
    box.appendChild(evidence);

    textBox.appendChild(box);
    scrollDown();
    await wait(1000);
    await typeText(clue.question);
    await wait(500);
    await askInvestigationQuestion(clue);
    await continuePrompt();
}
async function showInvestigationTimeline(events) {
    await typeHeading("ATTACK TIMELINE");
    const timeline = document.createElement("div");
    timeline.className = "timeline-container";
    textBox.appendChild(timeline);
    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const box = document.createElement("div");
        box.className = "timeline-event";
        const time = document.createElement("div");
        time.className = "timeline-time";
        time.textContent = event.time;
        const story = document.createElement("div");
        story.className = "timeline-story";
        box.appendChild(time);
        box.appendChild(story);
        timeline.appendChild(box);
        // type text inside timeline box
        await typeTimelineLines(
            event.story,
            story
        );
        // don't add arrow after last event
        if(i !== events.length - 1){
            const arrow=document.createElement("div");
            arrow.className="timeline-arrow";
            arrow.innerHTML=`
            <svg width="30" height="50">
                <line 
                x1="15" 
                y1="0" 
                x2="15" 
                y2="35"
                stroke="currentColor"
                stroke-width="3"/>
                <polyline
                points="7,30 15,40 23,30"
                fill="none"
                stroke="currentColor"
                stroke-width="3"/>
            </svg>
            `;
            timeline.appendChild(arrow);
        }
        await wait(700);
    }
}

async function typeTimelineLines(lines, container) {

    for (let i = 0; i < lines.length; i++) {

        await typeTimelineLine(lines[i], container);

        if (skipRequested) {

            for (let j = i + 1; j < lines.length; j++) {

                const p = document.createElement("p");
                p.className = "story-line";
                p.textContent = lines[j];
                container.appendChild(p);

            }

            scrollDown();
            skipRequested = false;
            return;
        }

        await wait(400);
    }
}

async function typeTimelineLine(text, container) {

    return new Promise(resolve => {

        const p = document.createElement("p");
        p.className = "story-line";

        const cursor = document.createElement("span");
        cursor.className = "cursor";
        cursor.textContent = "|";
        p.appendChild(cursor);
        container.appendChild(p);
        let i = 0;
        const speed = 35;
        function typeNext(){
            if(skipRequested){
                p.textContent = text;
                scrollDown();
                resolve();
                return;
            }
            if(i >= text.length){
                cursor.remove();
                resolve();
                return;
            }
            const char = text[i++];
            p.insertBefore(
                document.createTextNode(char),
                cursor
            );
            scrollDown();
            let delay = speed;
            if(char === "." || char === "!" || char === "?"){
                delay = 300;
            }
            setTimeout(typeNext, delay);
        }
        typeNext();
    });
}

async function showLesson(text) {

  const box = document.createElement("div");
  box.className = "lesson-box";

  textBox.appendChild(box);

  let i = 0;

  const interval = setInterval(() => {

    box.innerHTML += text[i];
    i++;

    if (i >= text.length) clearInterval(interval);

  }, 25);
}


function showControls() {

  controlsBox.innerHTML = "";

  if (scenarioRunning) {

    // SKIP BUTTON
    const skipBtn = document.createElement("button");
    skipBtn.className = "primary-button";
    skipBtn.textContent = "Skip";
    skipBtn.onclick = () => {
      skipRequested = true;
    };
    
    // BACK BUTTON
    const backBtn = document.createElement("button");
    backBtn.className = "primary-button";
    backBtn.textContent = "Back to Dashboard";
    backBtn.onclick = () => {
      window.location.href = "index.html";
    };

    controlsBox.appendChild(skipBtn);
    controlsBox.appendChild(backBtn);

  } else {

    const text = document.createElement("p");
    text.textContent =
      "You have completed the scenario. Click 'Replay Scenario' to see what would have happened if you chose differently.";

    const replayBtn = document.createElement("button");
    replayBtn.className = "primary-button";
    replayBtn.textContent = "Replay Scenario";
    replayBtn.onclick = () => location.reload();

    const backBtn = document.createElement("button");
    backBtn.className = "primary-button";
    backBtn.textContent = "Back to Dashboard";
    backBtn.onclick = () => {
      window.location.href = "index.html";
    };

    controlsBox.appendChild(text);
    controlsBox.appendChild(replayBtn);
    controlsBox.appendChild(backBtn);
  }
}

function wait(ms) {
  return new Promise(res => {
    setTimeout(res, ms);
  });
}
init();
