const corporatePhishingArtifact = {
  title: "Email Comparison",

  description: [
    "The investigator places two emails side by side.",
    "One is a legitimate message from your company's IT department.",
    "The other is the phishing email involved in the incident.",
    "\"Your goal is to examine the fake email and identify the suspicious elements.\"",
    "\"Business phishing emails are designed to look routine, so the warning signs are usually hidden in small details.\""
  ],

  fakeEmail: {
    label: "Suspicious Email (Fake)",

    blocks: [

      {
        id: "fake_sender",
        compareWith: "real_sender",
        text:
          "From: IT Security Team <security@company-it-support.com>",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "The display name looks like it belongs to your company's IT department, but the email address uses a completely different domain.\n\n" +
          "Attackers can make an email appear to come from almost anyone by changing the display name. Always check the actual address behind it."
      },


      {
        id: "fake_subject",
        compareWith: "real_subject",
        text:
          "Subject: Unusual Sign-In Activity Detected. Action Required.",

        type: "safe",

        explanation:
          "Not quite. Security alerts like this can be completely legitimate.\n\n" +
          "Many organisations really do notify staff about unusual sign-in activity, so the subject line alone is not enough to tell whether an email is genuine."
      },


      {
        id: "fake_greeting",
        compareWith: "real_greeting",
        text:
          "Hello,\n\n" +
          "We detected an unusual sign-in attempt on your company account.",

        type: "safe",

        explanation:
          "Not quite. This wording is common in both genuine security alerts and phishing emails.\n\n" +
          "Professional language does not guarantee that an email is safe."
      },


      {
        id: "fake_message",
        compareWith: "real_message",
        text:
          "To keep your account secure, please verify your identity before continuing to use company services.",

        type: "safe",

        explanation:
          "Not quite. On its own, this request sounds reasonable.\n\n" +
          "The important question is how the email wants you to verify your identity."
      },


      {
        id: "fake_urgency",
        compareWith: "real_urgency",
        text:
          "This verification link expires in 60 minutes. Failure to verify may result in temporary account restrictions.",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "The email creates pressure by giving you a very short deadline.\n\n" +
          "Attackers use urgency to make people act before they stop to question whether the message is genuine.\n\n" +
          "Real IT departments rarely expect staff to solve security issues within an hour through an email link."
      },


      {
        id: "fake_button",
        compareWith: "real_button",
        text:
          "[ Verify My Identity ]",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "The email asks you to sign in through a link inside the message.\n\n" +
          "The button itself looks normal, but it actually leads to:\n\n" +
          "https://company-it-support.com/verify\n\n" +
          "This address does not belong to your company's real sign-on portal.\n\n" +
          "Attackers often create convincing domains by adding words like 'login', 'support', 'security', 'verify', or 'account'.\n\n" +
          "The safest approach is to open your company's sign-on portal yourself instead of signing in through an email link."
      },


      {
        id: "fake_closing",
        compareWith: "real_closing",
        text:
          "If you require assistance, please contact the IT Service Desk.",

        type: "safe",

        explanation:
          "Not quite. A professional closing can appear in both real and fake emails.\n\n" +
          "Focus on details that are harder for attackers to copy, such as the sender's address and where links actually lead."
      }

    ]
  },


  realEmail: {

    label: "Legitimate Email (Real)",

    blocks: [

      {
        id: "real_sender",
        text:
          "From: IT Security Team <security@company.com>"
      },


      {
        id: "real_subject",
        text:
          "Subject: Unusual Sign-In Activity Detected"
      },


      {
        id: "real_greeting",
        text:
          "Hello,\n\n" +
          "We detected a recent sign-in attempt on your company account."
      },


      {
        id: "real_message",
        text:
          "If you believe this activity was not you, please open the company sign-on portal directly or contact the IT Service Desk.\n\n" +
          "We will never ask you to verify your password through a link in an email."
      },

      {
        id: "real_urgency",
        text:
          "For your security, please review this as soon as possible."
      },

      {
        id: "real_button",
        text:
          "[ Open Company Sign-On Portal ]"
      },


      {
        id: "real_closing",
        text:
          "If you need assistance, please contact the IT Service Desk using the number listed on the company intranet."
      }

    ]
  },


  requiredClues: [
    "fake_sender",
    "fake_urgency",
    "fake_button"
  ]
};

const adultPhishingCase = {
  id: "phishing_adult",
  meta: {
    title: "Phishing Email",
    description: "One convincing IT email is all it takes to hand over the keys to your inbox, and everything connected to it.",
    difficulty: "Medium",
    ageGroup: "working-adult",
    style: "Artifact Analysis"
  },
  intro: [
    "It's 6:40 PM, and you're wrapping up the last of today's emails before logging off.",
    "One more notification comes in, styled with your company's IT department branding.",
    "Subject line: \"Unusual Sign-In Activity Detected. Action Required.\"",
    "You've had a long day, and the last thing you want is a problem with your account overnight."
  ],
  setup: [
    "The email looks exactly like the ones IT usually sends. Same logo, same formatting, same tone.",
    "\"We detected a sign-in attempt from an unrecognized device. If this wasn't you, verify your identity immediately to secure your account.\"",
    "A button below reads: \"Verify My Identity.\"",
    "Underneath, in smaller text: \"This link will expire in 60 minutes for your security.\"",
    "You glance at your other open tabs: a client deliverable due tomorrow morning, three unread Slack messages.",
    "You don't have time for account problems tonight."
  ],
  choice: {
    text: "What do you do?",
    options: [
      {
        text: "Click the button and verify your identity.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You click \"Verify My Identity.\"",
              "A login page opens, styled identically to your company's actual single sign-on portal.",
              "You enter your work email and password without thinking twice. You've done this a hundred times before.",
              "The page reloads: \"Identity Verified. Redirecting to your dashboard...\"",
              "It drops you onto what looks like your normal inbox.",
              "You close the laptop and head to bed, mildly annoyed at the extra step."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "The next morning is business as usual: stand-up meeting, emails, the client deliverable you finish just in time.",
              "Nothing about your account seems any different.",
              "The whole thing slips your mind by lunchtime."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "That same night, 9:52 PM",
                story: [
                  "About an hour after you enter your credentials, someone logs into your real work email using them.",
                  "They don't send anything yet. First they read: old messages, calendar invites, a few emails from finance and legal, your manager's name and writing style."
                ]
              },
              {
                time: "The next afternoon",
                story: [
                  "A client you worked with last quarter replies to an email you don't remember sending, asking to confirm a change to an invoice's payment details.",
                  "You stare at the message. You never sent an invoice update."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "The attacker studied your writing style and your real client relationships before sending anything.",
              "The email to your client looked exactly like something you'd send. Same signature, same tone, even a reference to a real project.",
              "It asked the client to update the bank details on file for an upcoming invoice payment.",
              "The client, trusting a message that looked completely legitimate, began processing the change.",
              "Nobody broke into your company's systems. They didn't need to. Your inbox, and everyone who trusted it, was already inside the walls."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You call the client immediately, and they pause the payment change just before it goes through.",
              "It's close. Had it gone one more hour, a real payment would have been redirected to the attacker's account instead of the client's usual vendor.",
              "IT locks your account within the hour and starts a full review of everything the attacker touched.",
              "You spend the next two days working with IT and legal, explaining the incident to your manager, and personally apologizing to the client.",
              "IT confirms the attacker also searched your calendar and old emails for other contacts to target, though nothing else went out in time.",
              "By the end of the week, your password is reset, MFA is enabled company-wide as a direct result, and the story becomes a cautionary tale in the next security training."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "Three days later, your company's security team schedules a debrief.",
                "A digital forensics investigator working with IT pulls up the original email next to a real one from the company's actual IT department.",
                "\"This is a textbook business email compromise attempt,\" the investigator says.",
                "\"Nobody breached our network. Somebody built a very convincing fake login page, and it worked.\"",
                "\"Let's go through exactly what should have stood out.\""
              ],
              artifact: corporatePhishingArtifact,
              artifactComplete: [
                  "The investigator closes the two emails and places them beside the account activity records.",
                  "\"Now we know what made this email suspicious,\" the investigator explains.",
                  "\"The attacker copied the appearance of a genuine IT security message, but the small details revealed what was really happening.\"",
                  "The investigator points to the fake sender address, the countdown timer, and the verification button.",
                  "\"The email succeeded because it looked familiar enough that nobody stopped to question it.\"",
                  "\"But, if we knew where to look, it would have been clear that it was fake.\"",
                  "\"Now that we understand the warning signs, let's zoom out and look at how one stolen password nearly became a fraudulent client payment.\""
              ],
              timelineIntro: [
                "The investigator lines up the email, the fake login page, and your account's activity log in order.",
                "\"Let's walk through exactly how a single click on a Tuesday evening turned into a near-miss with a real client payment,\" they say."
              ],
              timeline: [
                {
                  time: "Tuesday, 6:41 PM",
                  story: [
                    "You open the email and click \"Verify My Identity.\"",
                    "The fake login page loads, styled identically to your company's real sign-on portal."
                  ]
                },
                {
                  time: "Tuesday, 6:42 PM",
                  story: [
                    "You enter your real work email and password.",
                    "The page forwards your credentials to the attacker, then redirects you to your real inbox so nothing looks wrong."
                  ]
                },
                {
                  time: "Tuesday, 9:52 PM",
                  story: [
                    "The attacker logs into your real work email for the first time.",
                    "They spend close to an hour reading old messages, studying your writing style, and identifying real client relationships."
                  ]
                },
                {
                  time: "Wednesday, 8:05 AM",
                  story: [
                    "The attacker sends a convincing email to a real client, requesting updated payment details for an upcoming invoice.",
                    "It uses your real signature and references a real project."
                  ]
                },
                {
                  time: "Wednesday, 1:15 PM",
                  story: [
                    "The client replies to confirm the change, unknowingly beginning to process a redirected payment.",
                    "You see the reply for the first time and realize something is very wrong."
                  ]
                },
                {
                  time: "Wednesday, 1:22 PM",
                  story: [
                    "You call the client directly. They pause the payment change with about an hour to spare before it would have gone through."
                  ]
                }
              ],
              chainSummary: [
                "Fake IT email",
                "Urgent deadline",
                "Fake login page",
                "Password stolen",
                "Email accessed",
                "Client impersonated",
                "Payment redirected",
                "Accounts secured"
              ],
              finalWords: [
                "The investigator closes the laptop.",
                "\"This almost cost a real client real money, and it started with a single email.\"",
                "\"The good news is, every one of these has a tell, if you know to look before you type your password anywhere.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator leaves you and the team with a few habits that would have stopped this at the first step.",
                  "\"None of these take more than a few seconds. That's exactly the point.\""
                ],
                advice: [
                  {
                    title: "Check the actual sender address, not just the name",
                    text: "A display name can say 'IT Security Team.' The real address behind it is much harder to fake convincingly, so always check it."
                  },
                  {
                    title: "Hover before you click",
                    text: "Preview a link's real destination before clicking anywhere. Never trust button text or a familiar-looking page alone."
                  },
                  {
                    title: "Go to internal tools directly, not through email links",
                    text: "If an email claims something's wrong with your account, open your company's sign-on portal directly instead of clicking through from the email."
                  },
                  {
                    title: "Treat urgency and countdowns as a warning sign",
                    text: "Legitimate IT issues rarely come with an expiring link or a one-hour deadline. Pressure to act instantly is a tactic, not a normal security process."
                  },
                  {
                    title: "Verify unusual requests through a second channel",
                    text: "A request to change payment details, even from a trusted contact, is worth a quick phone call to confirm, especially if it arrived by email alone."
                  }
                ]
              },
              epilogue: {
                  time: "Four months later",
                  story: [
                      "The incident changed the way you treat unexpected requests at work.",
                      "You no longer sign in through links in emails, even when the message appears to come from IT.",
                      "Whenever something involves passwords, invoices, or account access, you verify it through the official company portal or with a quick phone call.",
                      "The experience also made you more willing to question unusual requests, even if they appear to come from trusted colleagues or clients.",
                      "One stressful week became a habit of slowing down before clicking."
                  ]
              },
              lesson: [
                "A convincing fake page only needs one thing from you: your password, typed in willingly.",
                "Ninety seconds of doubt is cheaper than a redirected payment and three days of cleanup."
              ]
            }
          }
        ]
      },
      {
        text: "Go to your company's sign-on portal directly instead of clicking the link.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "Something about the 60-minute countdown feels off.",
              "IT has never sent you an email with an expiring link before.",
              "Instead of clicking through, you open a new tab and go directly to your company's real sign-on portal, the one you use every day.",
              "You log in normally. No warning, no unusual activity message, nothing.",
              "Your account looks exactly the way you left it."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "You shrug it off and finish the last of your emails before logging off for real.",
              "The next morning is business as usual: stand-up, the client deliverable, the same routine as always.",
              "You mention the odd email to a coworker over coffee, half-joking about it."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "The next morning",
                story: [
                  "Your coworker says they got the exact same email last night.",
                  "\"I almost clicked it,\" they admit. \"Glad you mentioned it.\""
                ]
              },
              {
                time: "Two days later",
                story: [
                  "IT sends a company-wide notice: a phishing campaign impersonating internal IT alerts has been circulating, and a small number of employees' accounts were compromised.",
                  "It includes a screenshot of the exact email you got.",
                  "You feel a quiet chill, realizing how close you came to clicking it yourself."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "The email you received was part of a coordinated campaign sent to a large portion of the company at once.",
              "For the employees who clicked through and entered their credentials, the fake page sent those credentials straight to the attacker, who used them to log into the real accounts within hours. No network breach was involved. It was just a convincing page and a rushed decision at the end of a long day.",
              "One compromised account was used to attempt a payment redirection with a real client, caught only hours before it would have gone through.",
              "For you, the fake page never received anything. There was nothing to steal, because you never typed your password into it."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You read the company-wide notice with a mix of relief and unease.",
              "A colleague on another team wasn't as lucky. Locked out for two days, personally apologizing to a client, sitting through an uncomfortable debrief with legal.",
              "You compare notes over lunch. The email you both received was identical, word for word.",
              "The only difference was what happened in the ninety seconds after opening it."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A few days after the company-wide notice, the security team runs a short session for your department, with a digital forensics investigator brought in to explain what happened.",
                "\"A significant number of you got this exact email,\" the investigator says, pulling it up on the screen.",
                "\"Some of you clicked it. Some of you didn't. Let's figure out what actually made the difference.\""
              ],
              artifact: corporatePhishingArtifact,
              artifactComplete: [
                "The investigator closes the two emails and places them beside the incident reports.",
                "\"Now we know what made this email suspicious,\" the investigator explains.",
                "\"Every employee received the same phishing email, but the warning signs were hidden in exactly the same places.\"",
                "The investigator points to the fake sender address, the countdown timer, and the verification button.",
                "\"The difference wasn't the email itself. The difference was what happened after it was opened.\"",
                "\"Now that we understand the clues, let's step back and look at how this phishing campaign unfolded across the company.\""
              ],
              timelineIntro: [
                "The investigator lines up the email, the fake page, and the company-wide notice in order.",
                "\"Let's see exactly where this split into two very different outcomes,\" they say.",
                "\"Same email, sent to a huge portion of the company. What happened after is what actually mattered.\""
              ],
              timeline: [
                {
                  time: "Tuesday, 6:41 PM",
                  story: [
                    "You open the email and notice the 60-minute deadline feels unusual.",
                    "Instead of clicking through, you open a new tab."
                  ]
                },
                {
                  time: "Tuesday, 6:43 PM",
                  story: [
                    "You log into your company's real sign-on portal directly.",
                    "No warning, no unusual activity message. Your account is exactly as you left it."
                  ]
                },
                {
                  time: "Tuesday, 9:52 PM",
                  story: [
                    "Elsewhere in the company, other employees who clicked through and entered their credentials begin having their accounts accessed.",
                    "One attacker spends nearly an hour studying a compromised inbox before acting."
                  ]
                },
                {
                  time: "Wednesday, 8:05 AM",
                  story: [
                    "A fraudulent payment-redirection email goes out from one compromised account to a real client.",
                    "Yours is untouched. There was nothing on the fake page for the attacker to collect from you."
                  ]
                },
                {
                  time: "Wednesday, 1:22 PM",
                  story: [
                    "The affected employee catches the attempted fraud just before the payment change goes through.",
                    "IT begins a company-wide investigation the same afternoon."
                  ]
                },
                {
                  time: "Thursday",
                  story: [
                    "The company-wide notice goes out, confirming the phishing campaign and warning everyone to check their recent activity."
                  ]
                }
              ],
              chainSummary: [
                "Fake IT email",
                "Urgency noticed",
                "Portal opened",
                "Link avoided",
                "Account protected",
                "Scam reported",
                "Team warned"
              ],
              finalWords: [
                "The investigator closes the laptop.",
                "\"You didn't need to be a security expert to catch this. You just paused for a few seconds before typing your password anywhere.\"",
                "\"That pause is the entire difference between this being nothing, and this being a very bad week.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator leaves the team with a few habits worth keeping, even though this one worked out for you.",
                  "\"Catching one doesn't mean the next one will be just as obvious. These habits are what make it reliable every time.\""
                ],
                advice: [
                  {
                    title: "Check the actual sender address, not just the name",
                    text: "A display name can say 'IT Security Team.' The real address behind it is much harder to fake convincingly, so always check it."
                  },
                  {
                    title: "Hover before you click",
                    text: "Preview a link's real destination before clicking anywhere. Never trust button text or a familiar-looking page alone."
                  },
                  {
                    title: "Go to internal tools directly, not through email links",
                    text: "If an email claims something's wrong with your account, open your company's sign-on portal directly, exactly what you did here."
                  },
                  {
                    title: "Treat urgency and countdowns as a warning sign",
                    text: "Legitimate IT issues rarely come with an expiring link or a one-hour deadline. Pressure to act instantly is a tactic, not a normal process."
                  },
                  {
                    title: "Report suspicious emails instead of just deleting them",
                    text: "Forwarding a phishing attempt to your security team can help get a warning out before more people click it."
                  }
                ]
              },
              epilogue: {
                  time: "Four months later",
                  story: [
                      "That suspicious email is long forgotten, but the habits you built have stayed with you.",
                      "You now open internal tools directly instead of following links in emails, even when they appear genuine.",
                      "You also double-check unusual payment requests and encourage newer coworkers to do the same.",
                      "Those small habits take only a few seconds, but they have become part of your everyday routine.",
                      "One careful decision helped prevent what could have become a much larger incident."
                  ]
              },
              lesson: [
                "You didn't need to be an expert. You just needed a few seconds of doubt before typing your password.",
                "The email had no power at all. Not until someone gave it their password."
              ]
            }
          }
        ]
      }
    ]
  }
};

window.scenarios = window.scenarios || [];
window.scenarios.push(adultPhishingCase);
