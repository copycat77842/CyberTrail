const schoolPhishingArtifact = {
  title: "Email Comparison",

  description: [
    "The investigator places two emails side by side.",
    "One is a legitimate message from your school's learning platform.",
    "The other is the phishing email involved in the incident.",
    "\"Your goal is to examine the fake email and identify the suspicious elements.\"",
    "\"Attackers often copy real emails closely, so the clues are usually hidden in small details.\""
  ],

  fakeEmail: {
    label: "Suspicious Email (Fake)",

    blocks: [

      {
        id: "fake_sender",
        compareWith: "real_sender",
        text:
          "From: Learning Platform Support <support@learnportal-verify.com>",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "The display name looks legitimate, but the actual email address does not match the school's real platform.\n\n" +
          "Attackers can choose almost any display name they want. The address after it is what you should check."
      },


      {
        id: "fake_subject",
        compareWith: "real_subject",
        text:
          "Subject: Action Required: Verify Your Account",

        type: "safe",

        explanation:
          "Not quite. The subject line alone is not enough evidence.\n\n" +
          "Attackers often copy real subject lines because familiar wording makes their emails look more trustworthy."
      },


      {
        id: "fake_greeting",
        compareWith: "real_greeting",
        text:
          "Hello Sam,\n\n" +
          "We hope you are having a good day. We are contacting you regarding your school learning platform account.",

        type: "safe",

        explanation:
          "Not quite. This type of greeting is common in both real emails and phishing emails.\n\n" +
          "A professional tone does not automatically mean an email is safe."
      },


      {
        id: "fake_message",
        compareWith: "real_message",
        text:
          "We have detected unusual sign-in activity on your account.",

        type: "safe",

        explanation:
          "Not quite. Real services sometimes send alerts about unusual sign-ins.\n\n" +
          "The important question is what the email asks you to do afterwards."
      },


      {
        id: "fake_urgency",
        compareWith: "real_urgency",
        text:
          "Please verify your details within the next 2 hours or your account access may be temporarily suspended.",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "This message creates pressure by giving you a very short deadline.\n\n" +
          "Phishing attacks often use urgency to stop people from checking whether the message is genuine."
      },

      {
        id: "fake_button",
        compareWith: "real_button",
        text:
          "[ Verify My Account ]",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "The email is asking you to sign in through a link inside the message.\n\n" +
          "The button itself looks normal, but it actually leads to:\n\n" +
          "https://learnportal-security-check.com/login\n\n" +
          "This address does not belong to your school's real learning platform.\n\n" +
          "Attackers often create convincing website addresses by adding words like 'security', 'verify', or 'check'.\n\n" +
          "The safest approach is to open your school's learning platform yourself or type the website address manually instead of signing in through an email link.",

        hiddenData: { // could be used as a hover preview
          destination:
            "https://learnportal-security-check.com/login"
        }
      },


      {
        id: "fake_closing",
        compareWith: "real_closing",
        text:
          "If you have any questions, please contact our support team.",

        type: "safe",

        explanation:
          "Not quite. A professional closing can appear in both real and fake emails.\n\n" +
          "You need to look at the details that are harder for attackers to fake."
      }

    ]
  },


  realEmail: {

    label: "Legitimate Email (Real)",

    blocks: [

      {
        id: "real_sender",
        text:
          "From: Learning Platform Support <support@yourschoolplatform.edu>"
      },


      {
        id: "real_subject",
        text:
          "Subject: Action Required: Verify Your Account"
      },


      {
        id: "real_greeting",
        text:
          "Hello Sam,\n\n" +
          "We hope you are having a good day. We are contacting you regarding your school learning platform account."
      },


      {
        id: "real_message",
        text:
          "We have detected a recent sign-in attempt on your account."
      },

      {
        id: "real_urgency",
        text:
          "For your security, please review your account details within the next few weeks to ensure your information is up to date."
      },

      {
        id: "real_button",
        text:
          "[ Verify My Account ]"
      },


      {
        id: "real_closing",
        text:
          "If you have any questions, please contact your school's IT department."
      }

    ]
  },


  requiredClues: [
    "fake_sender",
    "fake_urgency",
    "fake_button"
  ]
};

const studentPhishingCase = {
  id: "phishing_student",
  meta: {
    title: "Phishing Email",
    description: "Can you spot a fake login page before it costs you your school account and your friends' trust?",
    difficulty: "Easy",
    ageGroup: "student",
    style: "Artifact Analysis"
  },
  intro: [
    "It's a Thursday night, and you're finally sitting down to finish tomorrow's assignment.",
    "Your laptop is open to three tabs: the assignment brief, a half-written document, and your school's learning platform.",
    "Just as you start typing, a notification pops up in the corner of your screen.",
    "It's an email, apparently from your school's learning platform.",
    "The subject line reads: \"Action Required: Verify Your Account.\""
  ],
  setup: [
    "You open the email. It looks right at a glance. Same logo, same blue banner, same font your school platform always uses.",
    "\"We've detected unusual sign-in activity on your account. To keep your account safe, please verify your details within the next 2 hours, or your access may be temporarily suspended.\"",
    "Underneath, a button: \"Verify My Account.\"",
    "You glance at the clock. It's 9:47 PM, and your assignment is due at 8:30 AM.",
    "Losing access tonight, of all nights, would be a disaster.",
    "Your cursor hovers over the button."
  ],
  choice: {
    text: "What do you do?",
    options: [
      {
        text: "Click the button and log in to verify your account.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You click \"Verify My Account.\"",
              "A login page opens, styled exactly like your school platform. Same colors, same layout, even the little mascot icon in the corner.",
              "You type in your username and password without a second thought.",
              "The page reloads. \"Verification Successful. Redirecting...\"",
              "It drops you back onto what looks like your assignments dashboard.",
              "Relieved, you close the tab and get back to your homework."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "You finish the assignment around midnight and submit it with time to spare.",
              "The next morning is completely normal. Class, lunch, the usual group chat chaos.",
              "You don't think about the email again.",
              "Everything about your account seems exactly the way you left it."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "That same night",
                story: [
                  "A little after 10 PM, while you're asleep, someone logs into your real school account using the username and password you just typed into the fake page.",
                  "They don't change anything yet. They just look around. Your messages, your classmates' names, your assignment history.",
                  "Nothing about your account looks any different from the outside."
                ]
              },
              {
                time: "The next afternoon",
                story: [
                  "A classmate messages you. \"Lol did you really send this to everyone?\"",
                  "They forward you a message you don't remember sending, the same kind of urgent link, this time claiming you both won something through the school portal.",
                  "You laugh it off at first. Then you check your own sent messages."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "Your sent folder is full of messages you never wrote.",
              "The same \"Verify Your Account\" style link, sent to almost everyone in your class and half your group chats overnight.",
              "A few classmates already clicked it, because it came from someone they actually know.",
              "That's not an accident. A message from a real friend gets far less scrutiny than one from a stranger, and whoever sent these was counting on exactly that.",
              "They didn't need to hack anything. They just needed one password, typed into a page that looked convincing enough."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You try to log in to change your password. It doesn't work. It's already been changed.",
              "You tell your parents, who help you contact the school's IT department the next morning.",
              "It takes two days to get your account back, verify your identity, and reset everything.",
              "In the meantime, your assignment file, the one due that night, is missing from your submissions folder.",
              "Your teacher is understanding once you explain, but you still have to redo hours of work.",
              "Worse, a few classmates are annoyed their own accounts got targeted because of a link that came from you."
            ]
          },
          {
            type: "investigation",
            data: {
              intro:[
              "A few days later, the school's IT department asks you to help investigate what happened.",
              "A digital forensics investigator places the original email on screen beside a genuine message from the school's platform.",
              "\"The attacker didn't break into the school's systems,\" the investigator explains.",
              "\"They created something that looked trustworthy enough that someone would willingly hand over their password.\"",
              "\"Before we look at the damage, let's examine the email itself.\"",
              "\"Every phishing message contains clues. Your job is to find them.\""
              ],
              artifact: schoolPhishingArtifact,
              artifactComplete: [
                "The investigator closes the two emails and places them beside the account activity records.",
                "\"Now we know what made this email suspicious,\" the investigator explains.",
                "\"The attacker copied the appearance of a real message, but the small details revealed what was really happening.\"",
                "The investigator looks back at the evidence collected from the incident.",
                "\"Now that we understand the clues, let's zoom out and look at the entire timeline of what happened after this email was opened.\""
              ],
              timelineIntro: [
                "The investigator lines up the email, the fake login page, and your account's activity log in order.",
                "\"Every piece of this was designed to look normal enough that you wouldn't stop and check,\" they explain.",
                "\"Let's walk through exactly how it played out, minute by minute.\""
              ],
              timeline: [
                {
                  time: "Thursday, 9:47 PM",
                  story: [
                    "You open the email and click \"Verify My Account.\"",
                    "The fake login page loads, styled to look identical to the real platform."
                  ]
                },
                {
                  time: "Thursday, 9:48 PM",
                  story: [
                    "You enter your real username and password into the fake page.",
                    "The page instantly forwards your credentials to the attacker, then redirects you to the real platform so nothing seems wrong."
                  ]
                },
                {
                  time: "Thursday, 10:12 PM",
                  story: [
                    "The attacker logs into your real account for the first time, using the credentials you just typed.",
                    "They don't change anything yet. They just look around."
                  ]
                },
                {
                  time: "Thursday, 11:30 PM",
                  story: [
                    "The attacker sends the same phishing message to your entire contacts list, disguised as a personal message from you.",
                    "Several classmates receive it before midnight."
                  ]
                },
                {
                  time: "Friday, 7:15 AM",
                  story: [
                    "Your password is changed by the attacker, locking you out.",
                    "Your missing assignment file is deleted around the same time."
                  ]
                },
                {
                  time: "Friday, 1:40 PM",
                  story: [
                    "A classmate messages you asking about the strange link you supposedly sent.",
                    "You realize something is very wrong."
                  ]
                }
              ],
              chainSummary: [
                "Phishing email sent to students",
                "Student clicks fake verification button",
                "Credentials entered into fake login page",
                "Attacker gains access to account",
                "Account used to spread more phishing emails",
                "Student locked out and begins recovery process"
              ],
              finalWords: [
                "The investigator closes the laptop.",
                "\"This wasn't about you being careless. This page was built to be convincing.\"",
                "\"But every fake page leaves clues, if you know to look for them before you type anything in.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator leaves you with a few habits that would have stopped this before it started.",
                  "\"None of these take long. That's the whole point.\""
                ],
                advice: [
                  {
                    title: "Check the actual sender address, not just the name",
                    text: "A display name can say anything. The real address behind it is much harder to fake convincingly."
                  },
                  {
                    title: "Hover before you click",
                    text: "On a computer, hover over a link to preview where it really goes. On a phone, press and hold. Never trust button text alone."
                  },
                  {
                    title: "Go to the site yourself instead of clicking through",
                    text: "If an email claims something's wrong with your account, open the platform directly, through the app or by typing the address yourself, instead of using the email's link."
                  },
                  {
                    title: "Treat urgency as a warning sign",
                    text: "Tight deadlines and threats of losing access are designed to rush you. Real account issues rarely need to be fixed within a couple of hours."
                  },
                  {
                    title: "Tell someone if you're not sure",
                    text: "A teacher, IT department, or parent can check something in seconds. Asking first is always faster than recovering an account afterward."
                  }
                ]
              },
              epilogue: {
                time: "Three months later",
                story: [
                  "Three months have passed since the phishing incident.",
                  "You notice that you approach emails differently now.",
                  "Before clicking anything, you check the sender address instead of trusting the name at the top.",
                  "When an email says something is urgent, you stop and ask yourself why it needs to happen so quickly.",
                  "You also started opening important websites yourself instead of using links from unexpected messages.",
                  "The mistake was frustrating, but it taught you habits that protect your accounts every day."
                ]
              },
              lesson: [
                "A fake page only needs one thing from you: your password, typed in willingly.",
                "Checking the address bar takes five seconds. Recovering an account takes days."
              ]
            }
          }
        ]
      },
      {
        text: "Go to the platform yourself instead of clicking the link.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "Something about the email nags at you.",
              "You've never gotten an email like this before, and the two-hour deadline feels off.",
              "Instead of clicking the button, you open a new tab and type your school platform's address in yourself.",
              "You log in normally. No warning, no unusual activity message, nothing.",
              "Your account looks exactly the way you left it."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "You go back to your assignment, a little unsettled but mostly relieved.",
              "You finish it just before midnight and submit it normally.",
              "The next day is completely ordinary. Class, lunch, the usual group chat chaos.",
              "You almost forget about the email entirely."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "The next morning",
                story: [
                  "A message goes around your class group chat. \"Anyone else get a weird email about verifying their account?\"",
                  "Turns out you weren't the only one who got it.",
                  "A couple of classmates say they clicked it without thinking twice."
                ]
              },
              {
                time: "Two days later",
                story: [
                  "The school sends out a notice to all students. A phishing email impersonating the learning platform has been circulating, and several accounts were compromised.",
                  "It includes a screenshot of the exact email you got.",
                  "You feel a small chill, realizing how close you came to clicking it too."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "The fake page that was sent to you was part of a much larger campaign, sent to dozens of students at once.",
              "For the students who clicked it and typed in their password, that password went straight to the attacker, who used it to log into their real accounts within hours. No hacking involved, just a convincing fake page and a rushed decision.",
              "For you, the login attempt on the fake page never happened. There was nothing to steal, because you never typed anything into it.",
              "The attacker's fake page just sits there, waiting for someone else to fall for it."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You mention the whole thing to your parents, partly proud of yourself for catching it.",
              "A friend who did click the link isn't so lucky. Locked out of their account for two days, redoing an assignment, dealing with weird messages sent from their name.",
              "You compare notes and realize the email you both got was identical.",
              "The only difference was what happened after you opened it."
            ]
          },
          {
            type: "investigation",
            data: {
              intro:[
                "A few days after the school-wide warning, your class takes part in a phishing investigation exercise.",
                "A digital forensics investigator displays the same email that was sent to students across the school.",
                "\"Some students clicked this message. Others stopped and checked first.\"",
                "\"The difference was not technical knowledge. It was noticing the warning signs before trusting the email.\"",
                "\"Let's examine the message and see what clues were hidden inside.\""
              ],
              artifact: schoolPhishingArtifact,
              artifactComplete: [
                "The investigator closes the two emails and places them beside the account activity records.",
                "\"Now we know what made this email suspicious,\" the investigator explains.",
                "\"The email was designed to look convincing, but the warning signs were there if you knew where to look.\"",
                "The investigator looks back at the evidence collected from the incident.",
                "\"Now that we understand the clues, let's zoom out and look at the entire timeline of what happened after students received this email.\""
              ],
              timelineIntro: [
                "The investigator lines up the email, the fake page, and the school's notice in order.",
                "\"Let's see exactly where this split into two different outcomes,\" they say.",
                "\"Same email, sent to everyone. What happened after is what actually mattered.\""
              ],
              timeline: [
                {
                  time: "Thursday, 9:47 PM",
                  story: [
                    "You open the email and notice the deadline feels unusual.",
                    "Instead of clicking the button, you open a new tab."
                  ]
                },
                {
                  time: "Thursday, 9:49 PM",
                  story: [
                    "You type the platform's address in yourself and log in normally.",
                    "No warning, no unusual activity message. Your account is exactly as you left it."
                  ]
                },
                {
                  time: "Thursday, 11:30 PM",
                  story: [
                    "Elsewhere, the same phishing email reaches other students.",
                    "Several of them click the button and enter their credentials into the fake page."
                  ]
                },
                {
                  time: "Friday, 7:15 AM",
                  story: [
                    "Accounts belonging to students who entered their password begin getting taken over.",
                    "Yours is untouched, because there was nothing for the fake page to steal."
                  ]
                },
                {
                  time: "Saturday",
                  story: [
                    "The school sends a notice warning students about the phishing campaign, including a screenshot of the exact email.",
                    "By now, several accounts have already been compromised."
                  ]
                }
              ],
              chainSummary: [
                "Phishing email sent to students",
                "Student notices unusual warning signs",
                "Student visits platform independently",
                "No credentials given to attacker",
                "Attack continues against other students",
                "School identifies campaign and warns users"
              ],
              finalWords: [
                "The investigator closes the laptop.",
                "\"You didn't need to be an expert to catch this. You just paused for a second before typing your password anywhere.\"",
                "\"That pause is the entire difference between this being nothing, and this being a very bad week.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator gives the class a few habits worth keeping, even though this one worked out.",
                  "\"Catching one doesn't mean you'll always catch the next one automatically. These habits are what make it reliable.\""
                ],
                advice: [
                  {
                    title: "Check the actual sender address, not just the name",
                    text: "A display name can say anything. The real address behind it is much harder to fake convincingly."
                  },
                  {
                    title: "Hover before you click",
                    text: "On a computer, hover over a link to preview where it really goes. On a phone, press and hold. Never trust button text alone."
                  },
                  {
                    title: "Go to the site yourself instead of clicking through",
                    text: "If an email claims something's wrong with your account, open the platform directly instead of using the email's link, exactly what you did here."
                  },
                  {
                    title: "Treat urgency as a warning sign",
                    text: "Tight deadlines and threats of losing access are designed to rush you. Real account issues rarely need fixing within a couple of hours."
                  },
                  {
                    title: "Report suspicious emails instead of just deleting them",
                    text: "Forwarding a phishing email to a teacher or IT department can help get a warning out before more people click it."
                  }
                ]
              },
              epilogue: {
                time: "Four months later",
                story: [
                  "Four months have passed since the phishing campaign at your school.",
                  "You still remember how convincing the fake email looked when you first opened it.",
                  "Now, checking the sender address and hovering over links has become automatic.",
                  "Whenever a message tries to rush you into making a decision, you take a moment to verify it first.",
                  "You have even helped friends and classmates recognise suspicious messages before they click.",
                  "A few seconds of caution has become one of your strongest cybersecurity habits."
                ]
              },
              lesson: [
                "You didn't need to be an expert. You just needed five seconds of doubt before typing your password.",
                "The email had no power at all until someone gave it their password."
              ]
            }
          }
        ]
      }
    ]
  }
};

window.scenarios = window.scenarios || [];
window.scenarios.push(studentPhishingCase);
