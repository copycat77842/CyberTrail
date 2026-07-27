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

#### Paired hover highlighting
When the fake email is hovered, the matching real email block is highlighted too. This makes it easier to compare the suspicious element with the legitimate version side by side.

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

## 6. Level of Difficulty

CyberTrail was challenging because it required combining programming, cybersecurity knowledge, and user experience design.

### Challenges included

**Designing a flexible scenario system**  
Problem: each scenario needed different stories and outcomes while using the same code.  
Solution: created reusable scenario structures that allow new incidents to be added without rewriting the system.

**Creating realistic cyber scenarios**  
Problem: scenarios needed to be realistic while remaining safe.  
Solution: used fictional examples based on real attack patterns without interacting with real systems.

**Balancing technical accuracy and accessibility**  
Problem: cybersecurity concepts can be complicated.  
Solution: converted technical concepts into relatable stories understandable by different age groups.

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
- Interactive scenarios
- Multiple age groups
- Choice-based outcomes
- Investigation system
- Artifact analysis
- Timeline reconstruction
- Cybersecurity lessons
- Replay functionality
- Custom user interface
- Adjustable reading speed
- Persistent speed preference
- Paired fake/real hover highlighting

The project successfully demonstrates the core concept and provides a foundation for future development.

## 9. Future Improvements

If more time was available, we would expand CyberTrail with:

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

## 10. Conclusion

CyberTrail demonstrates how cybersecurity education can become more effective through interactive storytelling and investigation.

By combining technical implementation, cybersecurity principles, and human-centred design, CyberTrail helps users understand:
- How attacks happen
- Why people fall for them
- What evidence attackers leave behind
- How safer decisions prevent damage

Rather than simply telling users to be careful online, CyberTrail teaches them why cybersecurity habits matter.
