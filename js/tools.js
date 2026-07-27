// ---------------------------------------------------------------------
// Password strength estimation
//
// Deliberately entropy-based rather than "has a symbol" checkbox rules --
// checkbox rules would contradict the password scenario's own lesson
// that a strong-looking password is still unsafe if it's reused. This
// only judges how hard the password is to guess in isolation; it has no
// way of knowing whether you've used it anywhere else, which is called
// out explicitly in the UI.
// ---------------------------------------------------------------------

// A small, deliberately non-exhaustive sample of frequently leaked
// passwords, used only to catch the most obvious cases. This is not a
// real breach-database lookup.
const COMMON_PASSWORDS = new Set([
  "password", "123456", "123456789", "12345678", "12345", "1234567",
  "qwerty", "abc123", "password1", "111111", "123123", "letmein",
  "iloveyou", "admin", "welcome", "monkey", "dragon", "sunshine",
  "princess", "football", "baseball", "trustno1", "superman",
  "qwerty123", "1q2w3e4r", "starwars", "passw0rd", "master",
  "hello", "freedom", "whatever", "qazwsx", "shadow", "michael"
]);

function findSequentialRun(text, minLen = 4) {
  const lower = text.toLowerCase();
  const sequences = ["abcdefghijklmnopqrstuvwxyz", "0123456789"];
  for (const seq of sequences) {
    for (let i = 0; i <= seq.length - minLen; i++) {
      const forward = seq.slice(i, i + minLen);
      const backward = forward.split("").reverse().join("");
      if (lower.includes(forward)) return forward;
      if (lower.includes(backward)) return backward;
    }
  }
  return null;
}

function findKeyboardWalk(text, minLen = 4) {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "1234567890"];
  const lower = text.toLowerCase();
  for (const row of rows) {
    for (let i = 0; i <= row.length - minLen; i++) {
      const forward = row.slice(i, i + minLen);
      const backward = forward.split("").reverse().join("");
      if (lower.includes(forward)) return forward;
      if (lower.includes(backward)) return backward;
    }
  }
  return null;
}

function findCommonPasswordBase(password) {
  const lower = password.toLowerCase();
  if (COMMON_PASSWORDS.has(lower)) return lower;

  const stripped = lower.replace(/[0-9!@#$%^&*_\-]+$/, "");
  if (stripped !== lower && stripped.length >= 3 && COMMON_PASSWORDS.has(stripped)) {
    return stripped;
  }
  return null;
}

function estimatePasswordStrength(password) {
  if (!password) {
    return { bits: 0, label: "—", crackTime: "—", meterFraction: 0, issues: [] };
  }

  const issues = [];
  let charsetSize = 0;
  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[^a-zA-Z0-9]/.test(password)) charsetSize += 32;
  charsetSize = charsetSize || 1;

  let bits = password.length * Math.log2(charsetSize);

  const commonBase = findCommonPasswordBase(password);
  if (commonBase === password.toLowerCase()) {
    bits = Math.min(bits, 8);
    issues.push("This is one of the most commonly leaked passwords in the world. It offers no real protection at all, regardless of length.");
  } else if (commonBase) {
    bits = Math.min(bits, 14);
    issues.push(`This is based on "${commonBase}" with characters added on. Attackers try exactly these variations first, so it's barely stronger than the base word alone.`);
  }

  const seqRun = findSequentialRun(password);
  if (seqRun) {
    bits -= 12;
    issues.push(`Contains a predictable sequence ("${seqRun}"). Attackers check for these first.`);
  }

  const kbWalk = findKeyboardWalk(password);
  if (kbWalk) {
    bits -= 12;
    issues.push(`Contains a keyboard pattern ("${kbWalk}"). These are tried before almost anything else.`);
  }

  const repeatMatch = password.match(/(.)\1{2,}/);
  if (repeatMatch) {
    bits -= 8;
    issues.push(`Contains a repeated character run ("${repeatMatch[0]}"), which reduces how unpredictable it really is.`);
  }

  bits = Math.max(0, Math.round(bits));

  let label, crackTime, meterFraction;
  if (bits < 28) {
    label = "Very weak";
    crackTime = "Instantly";
    meterFraction = 0.12;
  } else if (bits < 40) {
    label = "Weak";
    crackTime = "Minutes to hours";
    meterFraction = 0.32;
  } else if (bits < 60) {
    label = "Reasonable";
    crackTime = "Days to years";
    meterFraction = 0.55;
  } else if (bits < 80) {
    label = "Strong";
    crackTime = "Centuries, with current methods";
    meterFraction = 0.8;
  } else {
    label = "Very strong";
    crackTime = "Far longer than a targeted guess would ever run";
    meterFraction = 1;
  }

  return { bits, label, crackTime, meterFraction, issues };
}

// ---------------------------------------------------------------------
// Password / passphrase generation
//
// Uses crypto.getRandomValues(), never Math.random() -- Math.random() is
// not cryptographically secure and should never be used for anything
// security-related. That distinction is called out in the UI on purpose.
// ---------------------------------------------------------------------

const PASSPHRASE_WORDS = [
  "anchor","autumn","banjo","beacon","blanket","blossom","boulder","bramble",
  "canyon","cascade","cedar","chalk","channel","charcoal","cinder","clover",
  "coast","comet","copper","coral","cotton","crater","cricket","crimson",
  "crystal","current","daisy","dawn","delta","desert","dune","dusk",
  "ember","falcon","feather","fern","flint","forest","fossil","frost",
  "garden","glacier","granite","gravel","harbor","harvest","hazel","hearth",
  "hollow","horizon","hound","hummingbird","indigo","island","ivory","jasper",
  "juniper","kestrel","lagoon","lantern","lavender","ledge","lichen","linen",
  "lumber","magpie","maple","marble","marsh","meadow","mesa","mineral",
  "mist","moss","mountain","navy","nectar","nest","nickel","nutmeg",
  "oak","oasis","obsidian","opal","orbit","orchard","otter","paddle",
  "pebble","pepper","pewter","pine","plateau","pond","poppy","prairie",
  "quartz","quill","rapid","raven","reef","ridge","river","robin",
  "rowan","saddle","sage","sail","sand","sapphire","satchel","savanna",
  "sequoia","shale","shore","sienna","slate","sled","sparrow","spruce",
  "starling","stone","stream","summit","sundial","swallow","tanager","terrace",
  "thicket","thistle","thunder","timber","topaz","trail","tundra","tussock",
  "valley","velvet","violet","walnut","warbler","wharf","willow","woodland"
];

function generateRandomPassword(length, options) {
  let charset = "";
  if (options.lower) charset += "abcdefghijklmnopqrstuvwxyz";
  if (options.upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.digits) charset += "0123456789";
  if (options.symbols) charset += "!@#$%^&*()-_=+[]{}";

  if (!charset) charset = "abcdefghijklmnopqrstuvwxyz";

  const values = new Uint32Array(length);
  crypto.getRandomValues(values);

  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset[values[i] % charset.length];
  }
  return result;
}

function generatePassphrase(wordCount) {
  const values = new Uint32Array(wordCount);
  crypto.getRandomValues(values);

  const words = [];
  for (let i = 0; i < wordCount; i++) {
    words.push(PASSPHRASE_WORDS[values[i] % PASSPHRASE_WORDS.length]);
  }

  const numberDigits = new Uint32Array(1);
  crypto.getRandomValues(numberDigits);
  const trailingNumber = numberDigits[0] % 100;

  return words.map(w => w[0].toUpperCase() + w.slice(1)).join("-") + "-" + trailingNumber;
}

// ---------------------------------------------------------------------
// Scam / urgency message scanner
//
// A weighted heuristic scorer, not a trained classifier. Each category
// contributes independently so the breakdown teaches *why* something
// was flagged, not just a single verdict.
// ---------------------------------------------------------------------

const SCAM_SIGNALS = [
  {
    category: "Urgency pressure",
    weight: 3,
    patterns: [
      /act now/i, /immediately/i, /urgent(ly)?/i, /right away/i,
      /within\s+(\d+\s*)?(hours?|minutes?)/i, /expires?\s+(today|soon)/i,
      /last chance/i, /(24|48|two|24-hour)\s*hours?/i, /before it'?s too late/i
    ]
  },
  {
    category: "Threats of lost access",
    weight: 3,
    patterns: [
      /account\s+(will be\s+|)suspend/i, /account.*(closed|locked|restricted|disabled)/i,
      /unauthorized activity/i, /suspicious (activity|sign-?in|login)/i,
      /verify.*(or|before).*(lose|suspend|restrict)/i
    ]
  },
  {
    category: "Generic greeting",
    weight: 2,
    patterns: [
      /dear (customer|user|member|sir\s*\/?\s*madam|valued)/i,
      /^\s*hello[,.]?\s*$/im
    ]
  },
  {
    category: "Requests for sensitive info",
    weight: 4,
    patterns: [
      /confirm your (password|pin|ssn|social security|card number|account number)/i,
      /enter your password/i, /verify your (identity|account|details|information)/i,
      /click here to (verify|update|confirm|log ?in)/i,
      /provide your (login|credentials|details)/i
    ]
  },
  {
    category: "Reward or prize bait",
    weight: 3,
    patterns: [
      /you('| ha)ve\s+won/i, /claim your (prize|reward|gift)/i,
      /free (gift|money|reward|prize)/i, /limited time offer/i,
      /congratulations/i
    ]
  },
  {
    category: "Suspicious link patterns",
    weight: 2,
    patterns: [
      /https?:\/\/[^\s]*-(verify|secure|login|update|support|account)[^\s]*/i,
      /bit\.ly|tinyurl|t\.co\//i
    ]
  }
];

function scanMessage(text) {
  const hits = [];
  let score = 0;

  if (!text || !text.trim()) {
    return { score: 0, verdict: "empty", label: "Paste a message to scan it.", hits: [] };
  }

  for (const signal of SCAM_SIGNALS) {
    for (const pattern of signal.patterns) {
      const match = text.match(pattern);
      if (match) {
        hits.push({ category: signal.category, matched: match[0], weight: signal.weight });
        score += signal.weight;
        break; // only count each category once, even with multiple matching patterns
      }
    }
  }

  let verdict, label;
  if (score === 0) {
    verdict = "low";
    label = "No obvious red flags found.";
  } else if (score <= 4) {
    verdict = "low";
    label = "A minor signal or two. Worth a second look, not necessarily a scam.";
  } else if (score <= 8) {
    verdict = "medium";
    label = "Several warning signs present. Treat this with real caution.";
  } else {
    verdict = "high";
    label = "Strongly resembles a scam message. Don't click, reply, or provide any information.";
  }

  return { score, verdict, label, hits };
}

// ---------------------------------------------------------------------
// DOM wiring
// ---------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  // --- Password checker ---
  const pwInput = document.getElementById("pw-input");
  const pwToggle = document.getElementById("pw-toggle");
  const pwMeterFill = document.getElementById("pw-meter-fill");
  const pwLabel = document.getElementById("pw-label");
  const pwBits = document.getElementById("pw-bits");
  const pwCrackTime = document.getElementById("pw-crack-time");
  const pwIssues = document.getElementById("pw-issues");

  function renderPasswordStrength() {
    const result = estimatePasswordStrength(pwInput.value);

    pwMeterFill.style.width = (result.meterFraction * 100) + "%";
    pwMeterFill.dataset.level =
      result.meterFraction === 0 ? "none" :
      result.meterFraction <= 0.32 ? "weak" :
      result.meterFraction <= 0.55 ? "reasonable" :
      result.meterFraction <= 0.8 ? "strong" : "very-strong";

    pwLabel.textContent = result.label;
    pwBits.textContent = pwInput.value ? `~${result.bits} bits of entropy` : "";
    pwCrackTime.textContent = pwInput.value ? `Estimated guess time: ${result.crackTime}` : "";

    pwIssues.innerHTML = "";
    result.issues.forEach(issue => {
      const li = document.createElement("li");
      li.textContent = issue;
      pwIssues.appendChild(li);
    });
  }

  if (pwInput) {
    pwInput.addEventListener("input", renderPasswordStrength);
    renderPasswordStrength();
  }

  if (pwToggle) {
    pwToggle.addEventListener("click", () => {
      const isHidden = pwInput.type === "password";
      pwInput.type = isHidden ? "text" : "password";
      pwToggle.textContent = isHidden ? "Hide" : "Show";
    });
  }

  // --- Password generator ---
  const genModeButtons = document.querySelectorAll(".gen-mode-btn");
  const genRandomOptions = document.getElementById("gen-random-options");
  const genPassphraseOptions = document.getElementById("gen-passphrase-options");
  const genOutput = document.getElementById("gen-output");
  const genButton = document.getElementById("gen-button");
  const genCopyButton = document.getElementById("gen-copy-button");
  const genLengthInput = document.getElementById("gen-length");
  const genLengthValue = document.getElementById("gen-length-value");
  const genWordCountInput = document.getElementById("gen-word-count");
  const genWordCountValue = document.getElementById("gen-word-count-value");

  let genMode = "random";

  genModeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      genMode = btn.dataset.mode;
      genModeButtons.forEach(b => b.classList.toggle("active", b === btn));
      genRandomOptions.classList.toggle("is-hidden", genMode !== "random");
      genPassphraseOptions.classList.toggle("is-hidden", genMode !== "passphrase");
      genOutput.textContent = "Click Generate to create a password";
      genOutput.classList.remove("has-value");
    });
  });

  if (genLengthInput) {
    genLengthInput.addEventListener("input", () => {
      genLengthValue.textContent = genLengthInput.value;
    });
  }

  if (genWordCountInput) {
    genWordCountInput.addEventListener("input", () => {
      genWordCountValue.textContent = genWordCountInput.value;
    });
  }

  if (genButton) {
    genButton.addEventListener("click", () => {
      let value;
      if (genMode === "random") {
        value = generateRandomPassword(parseInt(genLengthInput.value, 10), {
          lower: document.getElementById("gen-lower").checked,
          upper: document.getElementById("gen-upper").checked,
          digits: document.getElementById("gen-digits").checked,
          symbols: document.getElementById("gen-symbols").checked
        });
      } else {
        value = generatePassphrase(parseInt(genWordCountInput.value, 10));
      }
      genOutput.textContent = value;
      genOutput.classList.add("has-value");
    });
  }

  if (genCopyButton) {
    genCopyButton.addEventListener("click", async () => {
      if (!genOutput.classList.contains("has-value")) return;
      try {
        await navigator.clipboard.writeText(genOutput.textContent);
        const original = genCopyButton.textContent;
        genCopyButton.textContent = "Copied!";
        setTimeout(() => { genCopyButton.textContent = original; }, 1500);
      } catch (e) {
        // Clipboard access can fail in some contexts; fail silently rather
        // than block the tool from working.
      }
    });
  }

  // --- Scam scanner ---
  const scanInput = document.getElementById("scan-input");
  const scanButton = document.getElementById("scan-button");
  const scanResult = document.getElementById("scan-result");
  const scanGauge = document.getElementById("scan-gauge-fill");
  const scanLabel = document.getElementById("scan-label");
  const scanHits = document.getElementById("scan-hits");

  function renderScanResult() {
    const result = scanMessage(scanInput.value);

    scanResult.classList.remove("is-hidden");
    scanGauge.dataset.verdict = result.verdict;
    scanGauge.style.width = Math.min(100, (result.score / 12) * 100) + "%";
    scanLabel.textContent = result.label;

    scanHits.innerHTML = "";
    if (result.hits.length === 0 && result.verdict !== "empty") {
      const li = document.createElement("li");
      li.className = "scan-hit scan-hit--none";
      li.textContent = "No matching patterns in any category.";
      scanHits.appendChild(li);
    }
    result.hits.forEach(hit => {
      const li = document.createElement("li");
      li.className = "scan-hit";
      li.innerHTML = `<span class="scan-hit-category">${hit.category}</span><span class="scan-hit-match">matched: "${hit.matched}"</span>`;
      scanHits.appendChild(li);
    });
  }

  if (scanButton) {
    scanButton.addEventListener("click", renderScanResult);
  }
});
