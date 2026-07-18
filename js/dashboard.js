const dashboard = document.getElementById("dashboard");
const scenarioCount = document.getElementById("scenario-count");
const ageGroupSummary = document.getElementById("age-group-summary");
const ageGroupModal = document.getElementById("age-group-modal");
const ageGroupTrigger = document.getElementById("age-group-trigger");

const AGE_GROUP_KEY = "cybertrail-age-group";

function getCurrentAgeGroup() {
  return localStorage.getItem(AGE_GROUP_KEY) || "";
}

function getAgeGroupLabel(ageGroup) {
  switch (ageGroup) {
    case "working-adult":
      return "Working adult";
    case "older-adult":
      return "Older adult / retired";
    case "student":
    default:
      return "Student";
  }
}

function openScenario(scenarioId) {
  if (!scenarioId) return;
  window.location.href = `scenario.html?id=${scenarioId}`;
}

function showAgeGroupPrompt() {
  if (!ageGroupModal) return;
  ageGroupModal.classList.remove("is-hidden");
  ageGroupModal.setAttribute("aria-hidden", "false");
}

function hideAgeGroupPrompt() {
  if (!ageGroupModal) return;
  ageGroupModal.classList.add("is-hidden");
  ageGroupModal.setAttribute("aria-hidden", "true");
}

// Renders cards only for scenarios belonging to `ageGroup`. Assumes that
// age group's data has already been loaded via loadScenariosForAgeGroup.
function renderDashboard(ageGroup) {
  if (!dashboard) return;

  const scenarios = (Array.isArray(window.scenarios) ? window.scenarios : [])
    .filter((scenario) => scenario.meta && scenario.meta.ageGroup === ageGroup);

  dashboard.innerHTML = "";

  if (!scenarios.length) {
    dashboard.innerHTML = `
      <div class="empty-state">
        <h3>No scenarios available yet</h3>
        <p>Check that the scenario data is loaded correctly before opening the dashboard.</p>
      </div>
    `;
    if (scenarioCount) scenarioCount.textContent = "0 interactive scenarios ready";
    return;
  }

  const fragment = document.createDocumentFragment();

  scenarios.forEach((scenario) => {
    const meta = scenario.meta || {};
    const card = document.createElement("article");
    card.className = "scenario-card";

    const title = meta.title || scenario.title || scenario.id || "Scenario";
    const description = meta.description || "A practical cybersecurity case study waiting to be explored.";
    const difficulty = meta.difficulty || "Interactive";
    const time = meta.time || "10-15 minutes";

    card.innerHTML = `
      <div class="card-top">
        <span class="card-badge">${difficulty}</span>
        <span class="card-badge secondary">${time}</span>
      </div>
      <h3>${title}</h3>
      <p>${description}</p>
      <button type="button" class="primary-btn card-btn">Start case</button>
    `;

    card.querySelector("button").addEventListener("click", () => openScenario(scenario.id));
    fragment.appendChild(card);
  });

  dashboard.appendChild(fragment);

  if (scenarioCount) {
    scenarioCount.textContent = `${scenarios.length} interactive scenario${scenarios.length === 1 ? "" : "s"} ready`;
  }
}

// Loads only the data belonging to `ageGroup`, then renders the dashboard
// using just that data — nothing from the other two age groups is fetched.
function showScenariosForAgeGroup(ageGroup) {
  if (dashboard) {
    dashboard.innerHTML = `<div class="empty-state"><p>Loading scenarios…</p></div>`;
  }

  return loadScenariosForAgeGroup(ageGroup)
    .then(() => renderDashboard(ageGroup))
    .catch((err) => {
      console.error(err);
      if (dashboard) {
        dashboard.innerHTML = `
          <div class="empty-state">
            <h3>Couldn't load scenarios</h3>
            <p>Something went wrong loading the case data. Please refresh and try again.</p>
          </div>
        `;
      }
    });
}

function setAgeGroup(ageGroup) {
  const selected = ageGroup || "";
  if (!selected) return;

  localStorage.setItem(AGE_GROUP_KEY, selected);

  if (ageGroupSummary) {
    ageGroupSummary.textContent = `Selected age group: ${getAgeGroupLabel(selected)}.`;
  }

  hideAgeGroupPrompt();
  showScenariosForAgeGroup(selected);
}

if (ageGroupSummary) {
  const savedAgeGroup = getCurrentAgeGroup();
  ageGroupSummary.textContent = savedAgeGroup
    ? `Selected age group: ${getAgeGroupLabel(savedAgeGroup)}.`
    : "Choose your age group to personalise the experience.";
}

// If we already know the visitor's age group from last time, load and show
// their scenarios immediately rather than leaving the dashboard blank.
const initialAgeGroup = getCurrentAgeGroup();
if (initialAgeGroup) {
  showScenariosForAgeGroup(initialAgeGroup);
} else if (dashboard) {
  dashboard.innerHTML = `
    <div class="empty-state">
      <h3>Choose your age group to get started</h3>
      <p>Pick an option from the prompt to see cases tailored to you.</p>
    </div>
  `;
}

// Still asks every time a visitor lands on the dashboard, even if we already
// have a saved preference — picking again (or confirming the same one) is
// what actually triggers loading/showing that age group's scenarios above.
window.setTimeout(showAgeGroupPrompt, 120);

if (ageGroupModal) {
  ageGroupModal.querySelectorAll(".age-option").forEach((button) => {
    button.addEventListener("click", () => setAgeGroup(button.getAttribute("data-age-group")));
  });
}

if (ageGroupTrigger) {
  ageGroupTrigger.addEventListener("click", showAgeGroupPrompt);
}
