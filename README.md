# CyberTrail

## 1. Project Overview

### What is CyberTrail?
CyberTrail is an interactive cybersecurity education platform that teaches users how to recognise, investigate, and respond to real-world cyber threats.

Unlike traditional cybersecurity education tools that rely on articles, videos, or quizzes, CyberTrail places users inside realistic scenarios where they experience cyber incidents, analyse evidence, make decisions, and discover how attacks unfold.

The project focuses on the idea that cybersecurity is not only a technical problem; it is also a human behaviour problem. Many successful attacks occur because attackers manipulate trust, urgency, curiosity, or uncertainty.

CyberTrail aims to make cybersecurity education more engaging, memorable, and practical by teaching users how attackers think and how small decisions can prevent major consequences.

## 2. Problem Understanding & Relevance

Cyber attacks are becoming increasingly common, but many attacks succeed because users do not recognise warning signs.

Examples include:
- Clicking phishing links
- Reusing passwords
- Trusting fake login pages
- Responding to urgent requests without verification
- Sharing sensitive information with attackers

Many existing cybersecurity resources explain what users should not do, but they often fail to explain:
- Why people fall for these attacks
- How attackers manipulate users
- What happens after a mistake occurs
- How one small action can lead to larger consequences

### How CyberTrail Addresses This Problem
CyberTrail uses interactive storytelling and investigation to demonstrate the complete lifecycle of a cyber attack.

Instead of simply saying:
> "Do not click suspicious links."

CyberTrail shows:
> "What happens after someone clicks that link?"

Users learn by experiencing:
- The attacker's strategy
- The consequences of decisions
- The evidence left behind
- The steps needed to prevent future incidents

## 3. Project Goals

CyberTrail was designed around four goals:

### Goal 1: Improve cybersecurity awareness
Teach users how to identify common cyber threats:
- Phishing
- Credential theft
- Social engineering
- Account compromise
- Business email compromise

### Goal 2: Make cybersecurity education engaging
Transform cybersecurity from passive learning into an interactive experience. Users investigate incidents instead of simply reading warnings.

### Goal 3: Teach attacker methods safely
Help users understand attacker behaviour without exposing them to harmful techniques. All scenarios are simulated and use fictional data.

### Goal 4: Provide age-appropriate learning
Cyber risks differ depending on the user. CyberTrail includes scenarios designed for:

**Students**
- School platform phishing
- Game account theft
- Password reuse

**Working adults**
- Workplace phishing
- Fake IT notifications
- Business email compromise

**Older adults**
- Bank phishing
- Family scams
- Account recovery fraud

## 4. Features & Technical Implementation

### 4.1 Interactive Scenario Engine
The core of CyberTrail is a reusable scenario engine.

Each scenario contains:
- Introduction
- Story setup
- User choices
- Consequences
- Investigation phase
- Evidence analysis
- Timeline reconstruction
- Lessons learned

The engine allows multiple scenarios to share the same framework while changing the content.

#### How this demonstrates the criteria
**Creativity and Innovation**  
Most cybersecurity platforms present information or quizzes. CyberTrail creates an investigation experience where users become part of the incident.

### 4.2 Investigation-Style Storytelling
CyberTrail follows a unique structure:

**Stage 1 — Experience**  
The user experiences the incident from the victim's perspective.  
Example: a user receives a phishing email and decides whether to click.

**Stage 2 — Investigation**  
A digital investigator analyses what happened. The user discovers:
- How attackers gained access
- What information was stolen
- How the attack progressed
- Why the warning signs mattered

**Stage 3 — Prevention**  
The investigator explains the lessons learned and safer alternatives.

This approach improves understanding because users see both:
- The mistake
- The consequence
- The prevention method

**Stage 4 — Practical Reinforcement**

After completing an investigation, learners are guided towards practical tools that reinforce the cybersecurity concepts introduced during the scenario.

### 4.3 Artifact Analysis System
CyberTrail includes interactive evidence investigation.

Users analyse artifacts such as:
- Phishing emails
- Login records
- Fake websites
- Security alerts

Example: a phishing email investigation allows users to compare:

**Fake email**
- Sender address
- Suspicious links
- Urgency tactics
- Fake login requests

**Real email**
- Correct domain
- Safer verification process
- Official contact methods

The system highlights suspicious components and allows users to understand exactly what attackers changed.

Cybersecurity principles demonstrated:
- Domain verification
- Email security
- Authentication awareness
- Social engineering detection

#### Technical implementation

The artifact system dynamically links fake and legitimate evidence using unique identifiers.

When a user selects or hovers over an element in the fake email, JavaScript automatically locates the matching legitimate component and highlights both simultaneously.

This required synchronising two independent sets of evidence while keeping user interactions responsive and reusable across different scenarios.

### 4.4 Attack Timeline Reconstruction
After investigating evidence, users see the complete attack timeline.

Example:
- Fake email sent
- User clicks link
- Credentials stolen
- Attacker accesses account
- Further targets identified
- Damage occurs

This teaches that cyber attacks are usually a chain of events, not a single action.

Technical concepts demonstrated:
- Threat modelling
- Incident response
- Attack analysis
- Root cause investigation

### 4.5 Choice-Based Outcomes
Users make decisions throughout scenarios.

Examples:
- Click a suspicious link
- Open an official website instead
- Ask someone for help

Different choices create different outcomes. Wrong choices can lead to simulated consequences, while safer choices demonstrate prevention.

### 4.6 Typewriter Story System
CyberTrail includes a custom typewriter engine.

Features:
- Character-by-character text animation
- Adjustable typing speed
- Automatic scrolling
- Story pacing control
- Pause effects after punctuation
- Persistent reading-speed preference

The reading speed can be set for different preferences:
- Slow reading
- Cinematic reading
- Accessibility mode

The chosen speed is saved in `localStorage`, so the preference is remembered across scenarios.

This creates a more immersive investigation experience while still giving users control over pacing.

### 4.7 User Interface Design
The interface was designed to:
- Reduce information overload
- Guide users through investigations
- Clearly separate evidence and story sections
- Make cybersecurity approachable for non-technical users

The design focuses on human-centred learning rather than technical complexity.

The reading-speed controls are placed in the top-right corner for quick access, and the comparison experience is strengthened by linked highlighting between fake and real evidence.


### 4.8 Cyber Toolkit

The Cyber Toolkit extends CyberTrail beyond story-based learning by allowing users to immediately apply the lessons they have just learned.

Where the interactive scenarios explain **why** good cybersecurity habits matter through realistic stories, the toolkit allows users to immediately practise those habits using browser-based tools. Rather than existing as separate utilities, the tools are integrated into the learning experience and are recommended at the end of relevant scenarios.

All toolkit features run entirely in the browser without sending user data to a server, ensuring passwords and messages remain on the user's device.

#### Password Strength Estimation

The password checker estimates how hard a password is to guess based on entropy rather than simple checkbox rules.

It was designed this way because a password can look complex but still be unsafe if it is reused or commonly leaked. The tool also checks for common weak patterns that a pure entropy calculation would otherwise miss, including:

- Matches against a small curated sample of frequently leaked passwords (including common variations with digits appended, so **"password123"** is still flagged even though it is not an exact match to **"password"**)
- Sequential runs
- Keyboard walks
- Repeated character patterns

This list is intentionally small and illustrative rather than a complete breach-database lookup, since that would require server-side infrastructure that CyberTrail deliberately avoids.

The result shows:
- An estimated entropy score
- A strength label
- A rough guess-time estimate
- Explanations for why the password was flagged

This makes the tool educational rather than purely diagnostic, because it teaches *why* a password is weak.

#### Password and Passphrase Generation
CyberTrail includes a secure password generator that uses `crypto.getRandomValues()` instead of `Math.random()`.

This distinction matters because `Math.random()` is not cryptographically secure and should not be used for security-related randomness.

The generator supports:
- Random password generation
- Passphrase generation
- Adjustable length
- Character set options
- Copy-to-clipboard support

The passphrase mode helps demonstrate that longer memorable phrases can be stronger than short complex passwords.

#### Scam / Urgency Message Scanner
CyberTrail also includes a message scanner for suspicious emails and text messages.

Rather than acting like a black-box classifier, it uses weighted heuristic signals so the user can see *why* a message was flagged. The scanner checks for patterns such as:
- Urgency pressure
- Threats of lost access
- Generic greetings
- Requests for sensitive information
- Reward or prize bait
- Suspicious link patterns

The tool outputs:
- A risk label
- A score
- The matched warning signs
- A short explanation for each signal

This reinforces the phishing and social engineering lessons used throughout the scenarios.

#### How These Tools Support the Project

The Cyber Toolkit extends CyberTrail beyond story-based learning by allowing users to immediately apply the lessons they have just learned.

Rather than ending each scenario with static advice, CyberTrail recommends the most relevant tools based on the attack that occurred. For example:

- A phishing scenario recommends the Scam Message Scanner.
- A password reuse scenario recommends the Password Strength Meter and Password Generator.
- Future scenarios will recommend other tools that reinforce their specific lessons.

This bridges the gap between understanding a cyber threat and practising safer online behaviour. Together, the tools reinforce:

- Password hygiene
- Strong password generation
- Passphrase best practices
- Phishing awareness
- Social engineering detection
- Defensive security thinking

## 5. Technical Merit

### Technologies Used

**Frontend**
- HTML
- CSS
- JavaScript

Used for:
- User interface
- Scenario system
- Interactive elements
- Animations

### JavaScript Systems

**Scenario Engine**  
Handles:
- Story progression
- Choices
- Outcomes
- Investigation stages

**Artifact Engine**  
Handles:
- Evidence display
- Clue selection
- Fake/real comparison
- Hover-linked highlighting

**Timeline Engine**  
Handles:
- Attack reconstruction
- Event ordering
- Incident explanation

**Typewriter Engine**  
Handles:
- Text animation
- Reading speed
- Story pacing
- Persistent speed settings


**Cyber Toolkit**  
Handles:
- Password strength estimation
- Secure password generation
- Passphrase generation
- Scam message scanning
- Browser-only security analysis

## 6. Level of Difficulty

CyberTrail required solving several technical and design challenges while keeping the experience engaging and accessible for users with little cybersecurity knowledge.

### Designing a reusable scenario engine

Every scenario contains different stories, investigations, timelines and outcomes, but they all use the same underlying engine.

Instead of writing separate JavaScript for every scenario, a reusable scenario structure was created. The engine automatically handles:

- Story progression
- User choices
- Different outcomes
- Artifact investigations
- Timeline reconstruction
- Lessons and replay functionality

This means entirely new cyber incidents can be added simply by creating a new scenario object rather than rewriting application logic.

---

### Building an interactive artifact investigation system

Unlike a traditional quiz, CyberTrail allows users to investigate realistic evidence.

The artifact system needed to:

- Track which clues had already been found
- Prevent duplicate selections
- Display different explanations for correct and incorrect choices
- Unlock the investigation only after all required clues were identified
- Synchronise fake and legitimate evidence

A paired highlighting system was also developed so that hovering over a suspicious element automatically highlights the corresponding section in the legitimate email, making comparisons much easier.

---

### Interactive Attack Chain Visualisation

One unexpected technical challenge was designing a clear way to display how cyber attacks progress from one event to the next.

Early versions displayed the attack as a simple vertical list, but this made longer attacks difficult to follow and didn't clearly show how each event led to the next.

To solve this, we developed a custom snake-style attack chain visualisation.

The system automatically:

- Arranges attack stages into alternating rows
- Reverses the direction of every second row
- Draws connecting arrows between rows
- Adapts to different chain lengths without requiring manual positioning

This required dynamically calculating the layout of every stage and connector instead of using a fixed design.

The final result is both more compact and easier to follow, helping users understand that cyber attacks are chains of connected events rather than isolated mistakes.

---

### Building a meaningful password strength estimator

Designing the password strength checker was more challenging than simply checking whether a password contained uppercase letters, numbers, or symbols.

A simple checklist approach would have been easier to implement, but it would also have contradicted CyberTrail's own lessons. A password can satisfy every checklist requirement while still being weak if it is based on a commonly leaked password.

Instead, the password checker estimates entropy from password length and character variety, then adjusts the result when it detects predictable patterns that reduce real-world security, including:

- Common leaked passwords
- Sequential character runs
- Keyboard walks
- Repeated characters

During testing, an early version correctly detected **"password"** as weak but incorrectly rated **"password123"** as reasonably strong because the added digits increased the entropy calculation.

To solve this, the checker was extended to remove common trailing numbers and symbols before comparing against the leaked-password list, allowing common variations to be detected while still remaining entirely client-side.

This refinement improved the educational value of the tool by reducing situations where users might receive false confidence from a password that still follows a well-known attack pattern.

---

### Designing an educational scam message scanner

The scam message scanner was designed to teach users *why* a message appears suspicious rather than simply telling them whether it is safe.

Instead of acting like a black-box classifier, the scanner analyses each message using multiple independent categories, including:

- Urgency pressure
- Threats of lost access
- Generic greetings
- Requests for sensitive information
- Reward or prize bait
- Suspicious link patterns

Each category contributes a weighted score, and the tool explains exactly which phrases triggered each warning.

Choosing appropriate weights and detection patterns required balancing realism with false positives. If the patterns were too broad, ordinary emails would be incorrectly flagged. If they were too narrow, many phishing messages would be missed.

This approach supports CyberTrail's educational goals by encouraging users to recognise suspicious behaviour themselves instead of relying on an automated verdict.

---

### Creating realistic but safe cyber scenarios

Every scenario is based on real phishing and social engineering techniques while using entirely fictional organisations, accounts and websites.

Balancing realism with responsible cybersecurity education was challenging because the scenarios needed to feel authentic without teaching offensive techniques.

---

### Building an immersive storytelling engine

The custom typewriter engine was designed to make scenarios feel like interactive investigations rather than static pages.

The engine includes:

- Character-by-character typing
- Adjustable reading speed
- Automatic scrolling
- Punctuation pauses
- Persistent user preferences using localStorage

Multiple iterations were required to balance immersion with readability so users could control the pace without disrupting the experience.

---

### Balancing technical accuracy with accessibility

Cybersecurity concepts such as credential theft, phishing, business email compromise and incident response can be difficult for non-technical audiences.

The scenarios were repeatedly refined to explain these concepts using realistic stories rather than technical jargon, making them understandable for students, working adults and older users alike.

## 7. Ethical Considerations

CyberTrail follows ethical cybersecurity principles.

### Safety
The project:
- Does not attack real systems
- Does not collect user information
- Does not store passwords
- Uses simulated incidents only

### Privacy
The project protects users by:
- Using fictional accounts
- Avoiding real personal information
- Teaching privacy protection practices

### Ethical Hacking
CyberTrail focuses on defensive cybersecurity:
- Identifying threats
- Protecting accounts
- Understanding attacker behaviour
- Improving security awareness

It does not teach harmful activities.

## 8. Quality and Completeness

CyberTrail is a functional prototype demonstrating a complete cybersecurity education platform.

Implemented features:
- Integrated Cyber Toolkit
- Password strength estimation
- Secure password and passphrase generation
- Scam message scanner
- Interactive scenarios
- Age-specific scenarios for students, working adults, and older adults
- Choice-based outcomes
- Investigation system
- Artifact analysis
- Timeline reconstruction
- Cybersecurity lessons
- Replay functionality
- Custom user interface
- Adjustable reading speed
- Automatic scrolling
- Persistent speed preference
- Paired fake/real hover highlighting

The project successfully demonstrates the core concept and provides a foundation for future development.

## 9. Future Improvements

If more time was available, I would expand CyberTrail with:

### More scenarios
Examples:
- Ransomware incidents
- Social media account takeover
- Data breaches
- Unsafe public Wi-Fi
- AI-generated scams

### More advanced investigations
Possible additions:
- Interactive fake websites
- Browser simulations
- Log analysis
- Network diagrams
- Digital evidence collection

### Classroom features
Future versions could include:
- Teacher dashboards
- Student progress tracking
- Scenario assignments
- Group discussions

### More personalised learning
Possible additions:
- Difficulty levels
- Adaptive scenarios
- Personal learning recommendations

### Secure backend and user accounts
CyberTrail is currently hosted using GitHub Pages, which provides reliable static hosting but does not support a backend. With additional resources, a secure backend could be developed to support:
- User accounts
- Saved progress
- Personalised scenario tracking
- Teacher or admin dashboards
- Safer data handling and authentication

This would have made the platform much more powerful and scalable, especially for classroom use and long-term learning.

### Expanding the Cyber Toolkit

The Cyber Toolkit currently uses lightweight browser-based analysis so that all processing remains on the user's device.

Future versions could extend the toolkit by introducing:

- Machine-learning-assisted scam detection to compare against the current heuristic approach
- Larger password breach datasets through secure server-side lookups
- Additional security tools such as URL reputation checking and attachment analysis
- Personalised recommendations based on a user's previous scenario performance

These additions would further reinforce the practical cybersecurity skills introduced throughout CyberTrail.

## 10. Conclusion

CyberTrail demonstrates how cybersecurity education can become more effective through interactive storytelling and investigation.

By combining technical implementation, cybersecurity principles, and human-centred design, CyberTrail helps users understand:
- How attacks happen
- Why people fall for them
- What evidence attackers leave behind
- How safer decisions prevent damage

Rather than simply telling users to be careful online, CyberTrail enables them to experience cyber attacks, investigate the evidence, practise defensive techniques using integrated security tools, and build lasting cybersecurity habits. By combining interactive storytelling with practical reinforcement, the platform helps learners understand not only what to do, but why those actions matter.
