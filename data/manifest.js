// A lightweight, always-loaded index of every scenario variant that exists,
// and which file it lives in. This is the ONLY scenario data loaded
// unconditionally — the actual case content is fetched on demand, one age
// group's worth at a time, by js/scenario-loader.js.
//
// To add a new case in the future, add one entry per age variant here and
// drop the matching file in data/.
window.CYBERTRAIL_SCENARIO_SOURCES = [
  { id: "password_student", caseId: "password", ageGroup: "student", style: "Case Files", src: "data/password_student.js" },
  { id: "password_adult", caseId: "password", ageGroup: "working-adult", style: "Case Files", src: "data/password_adult.js" },
  { id: "password_olderadult", caseId: "password", ageGroup: "older-adult", style: "Case Files", src: "data/password_olderadult.js" },
  { id: "phishing_student", caseId: "phishing", ageGroup: "student", style: "Artifact Analysis", src: "data/phishing_student.js" },
  { id: "phishing_adult", caseId: "phishing", ageGroup: "working-adult", style: "Artifact Analysis", src: "data/phishing_adult.js" },
  { id: "phishing_olderadult", caseId: "phishing", ageGroup: "older-adult", style: "Artifact Analysis", src: "data/phishing_olderadult.js" }
];
