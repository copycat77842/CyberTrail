// Shared by index.html (dashboard.js) and scenario.html (engine.js).
// Loads scenario data files on demand instead of all at once, so a visitor
// only ever downloads and runs the case content for their own age group.

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-scenario-src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
      } else {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)));
      }
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.dataset.scenarioSrc = src;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

function getScenarioSources() {
  return Array.isArray(window.CYBERTRAIL_SCENARIO_SOURCES) ? window.CYBERTRAIL_SCENARIO_SOURCES : [];
}

// Loads every scenario data file belonging to a given age group (e.g. every
// case a student can see), and nothing belonging to any other age group.
function loadScenariosForAgeGroup(ageGroup) {
  const matches = getScenarioSources().filter((entry) => entry.ageGroup === ageGroup);
  return Promise.all(matches.map((entry) => loadScript(entry.src)));
}

// Loads the single data file that contains a specific scenario id.
function loadScenarioById(id) {
  const entry = getScenarioSources().find((source) => source.id === id);
  if (!entry) return Promise.reject(new Error(`Unknown scenario id: ${id}`));
  return loadScript(entry.src);
}
