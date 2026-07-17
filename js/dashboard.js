const dashboard = document.getElementById("dashboard");
const scenarioCount = document.getElementById("scenario-count");
const ageGroupSummary = document.getElementById("age-group-summary");
const ageGroupModal = document.getElementById("age-group-modal");
const ageGroupTrigger = document.getElementById("age-group-trigger");
const scenarioData = Array.isArray(window.scenarios) ? window.scenarios : [];

function openScenario(id) {
  if (!id) return;
  window.location.href = `scenario.html?id=${id}`;
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

function setAgeGroup(ageGroup) {
  const selected = ageGroup || "";
  if (!selected) return;

  localStorage.setItem("cybertrail-age-group", selected);

  if (ageGroupSummary) {
    ageGroupSummary.textContent = `Selected age group: ${getAgeGroupLabel(selected)}.`;
  }

  if (ageGroupModal) {
    ageGroupModal.classList.add("is-hidden");
    ageGroupModal.setAttribute("aria-hidden", "true");
  }
}

function showAgeGroupPrompt() {
  if (!ageGroupModal) return;
  ageGroupModal.classList.remove("is-hidden");
  ageGroupModal.setAttribute("aria-hidden", "false");
}

function renderDashboard() {
  if (!dashboard) return;

  dashboard.innerHTML = "";

  if (!scenarioData.length) {
    dashboard.innerHTML = `
      <div class="empty-state">
        <h3>No scenarios available yet</h3>
        <p>Check that the scenario data is loaded correctly before opening the dashboard.</p>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  scenarioData.forEach((scenario) => {
    const meta = scenario.meta || {};
    const card = document.createElement("article");
    card.className = "scenario-card";

    const title = meta.title || scenario.title || scenario.id || "Scenario";
    const description = meta.description || "A practical cybersecurity case study waiting to be explored.";
    const difficulty = meta.difficulty || "Interactive";
    const ageGroup = meta.ageGroup || "All ages";
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
}

if (scenarioCount) {
  scenarioCount.textContent = `${scenarioData.length} interactive scenarios ready`;
}

if (ageGroupSummary) {
  const savedAgeGroup = localStorage.getItem("cybertrail-age-group");
  ageGroupSummary.textContent = savedAgeGroup
    ? `Selected age group: ${getAgeGroupLabel(savedAgeGroup)}.`
    : "Choose your age group to personalise the experience.";
}

renderDashboard();
window.setTimeout(showAgeGroupPrompt, 120);

if (ageGroupModal) {
  ageGroupModal.querySelectorAll(".age-option").forEach((button) => {
    button.addEventListener("click", () => setAgeGroup(button.getAttribute("data-age-group")));
  });
}

if (ageGroupTrigger) {
  ageGroupTrigger.addEventListener("click", () => {
    if (ageGroupModal) {
      ageGroupModal.classList.remove("is-hidden");
      ageGroupModal.setAttribute("aria-hidden", "false");
    }
  });
}
