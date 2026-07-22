const adultPhishingCase = {
  id: "phishing_adult",
  meta: {
    title: "Phishing Email",
    description: "One convincing IT email is all it takes to hand over the keys to your inbox, and everything connected to it.",
    difficulty: "Medium",
    ageGroup: "working-adult"
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
              clues: [
                {
                  title: "Case File #1 - The Sender",
                  evidence: [
                    "The email's display name read \"IT Security Team\"",
                    "The actual sender address was it-alerts@company-secure-verify.com",
                    "The company's real IT department only ever emails from @yourcompany.com"
                  ],
                  question: "The display name looked completely normal. What should have been checked instead?",
                  options: [
                    {
                      text: "The email's formatting and logo.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator holds the two emails up side by side.",
                        "\"They're nearly identical.\""
                      ],
                      explanation: [
                        "\"Copying a company's branding takes minutes and tells you nothing about who really sent it.\"",
                        "\"Convincing design is exactly what makes these emails effective. It isn't something you can rule out by.\""
                      ]
                    },
                    {
                      text: "Whether the email contained spelling or grammar mistakes.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator rereads the email's wording carefully.",
                        "\"That's usually a good instinct, but not this time.\""
                      ],
                      explanation: [
                        "\"There isn't a single typo in this email. It reads just as professionally as anything real IT would send.\"",
                        "\"Spelling mistakes can sometimes be a clue, but plenty of convincing scams read perfectly. It's not something you can rely on.\""
                      ]
                    },
                    {
                      text: "The actual email address behind the display name.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator zooms into the real address.",
                        "\"That's the part that's much harder to fake convincingly.\""
                      ],
                      explanation: [
                        "\"Company IT only ever sends mail from one exact domain.\"",
                        "\"This email came from a completely different domain, dressed up with a familiar-sounding name.\"",
                        "\"Checking the actual address is the fastest way to catch this kind of email.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Link",
                  evidence: [
                    "The button was labeled \"Verify My Identity\"",
                    "Hovering over the button would have shown a preview of the real destination",
                    "That destination was a domain with no connection to the company's real IT infrastructure"
                  ],
                  question: "Without clicking, how could you have checked where that button actually led?",
                  options: [
                    {
                      text: "Hovering over the link before clicking would have shown the real destination.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator switches over to their own monitor to show you.",
                        "\"Exactly. This one habit catches most fake links.\""
                      ],
                      explanation: [
                        "\"A quick hover would have shown an address entirely unrelated to the company.\"",
                        "\"Button text can say anything. The actual link underneath is much harder to disguise well.\""
                      ]
                    },
                    {
                      text: "There's no way to know until you click it.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator opens a browser to demonstrate.",
                        "\"There actually is, and it takes about two seconds.\""
                      ],
                      explanation: [
                        "\"Hovering your cursor over a link, without clicking, shows the real destination, usually in the corner of the screen.\"",
                        "\"You never have to click something to find out where it actually leads.\""
                      ]
                    },
                    {
                      text: "Since the page matched our real single sign-on portal exactly, the link had to be safe.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"That's actually backwards.\""
                      ],
                      explanation: [
                        "\"A convincing copy of a login page tells you the attacker put in effort. It doesn't tell you the link is legitimate.\"",
                        "\"Appearance and actual destination are two completely separate things.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Urgency",
                  evidence: [
                    "The email gave a 60-minute expiration window",
                    "It implied the account was already at risk from an active sign-in attempt",
                    "The company's real IT alerts have never included an expiring countdown"
                  ],
                  question: "Why do emails like this almost always include a tight deadline?",
                  options: [
                    {
                      text: "Because security alerts genuinely need to be resolved that quickly.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the company's actual incident response policy.",
                        "\"Nothing in our real process works like that.\""
                      ],
                      explanation: [
                        "\"A genuine security concern can be verified by logging in directly, on your own time, through channels you already trust.\"",
                        "\"A countdown timer isn't a standard part of any legitimate account security process.\""
                      ]
                    },
                    {
                      text: "To make you act quickly, before you have time to stop and verify it.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods.",
                        "\"That's the entire purpose of it.\""
                      ],
                      explanation: [
                        "\"This is a manipulation technique called urgency pressure. It's one of the most reliable tools in phishing and business email compromise, and it's designed to short-circuit careful thinking.\"",
                        "\"You opened this at the end of a long day, with a deadline of your own the next morning. That timing wasn't accidental.\"",
                        "\"Any message pressuring you to act immediately is worth slowing down for, not speeding up for.\""
                      ]
                    },
                    {
                      text: "That's just the standard subject line format for IT security alerts.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator pulls up several past IT alerts for comparison.",
                        "\"Let's see if that actually holds up.\""
                      ],
                      explanation: [
                        "\"None of the company's real security alerts have ever used an expiring countdown like this.\"",
                        "\"That phrasing is chosen deliberately to create pressure. It isn't a standard format at all.\""
                      ]
                    }
                  ]
                }
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
              clues: [
                {
                  title: "Case File #1 - The Sender",
                  evidence: [
                    "The email's display name read \"IT Security Team\"",
                    "The actual sender address was it-alerts@company-secure-verify.com",
                    "The company's real IT department only ever emails from @yourcompany.com"
                  ],
                  question: "The display name looked completely normal. What actually gave this one away?",
                  options: [
                    {
                      text: "Spelling or grammar mistakes in the email.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator rereads the wording again.",
                        "\"There weren't any, actually.\""
                      ],
                      explanation: [
                        "\"This one was written cleanly, with no typos at all.\"",
                        "\"That's common. Spelling mistakes aren't a reliable test anymore, since plenty of convincing scams read perfectly.\""
                      ]
                    },
                    {
                      text: "The actual email address behind the display name.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator points out the real address instead.",
                        "\"That's exactly the part worth checking.\""
                      ],
                      explanation: [
                        "\"Company IT only ever sends mail from one exact domain.\"",
                        "\"This email came from a completely different domain, dressed up with a familiar-sounding name.\"",
                        "\"That mismatch is usually the fastest way to catch something like this.\""
                      ]
                    },
                    {
                      text: "The email's formatting and logo.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator holds up a side-by-side comparison.",
                        "\"Those were copied almost perfectly.\""
                      ],
                      explanation: [
                        "\"Copying a company's branding takes minutes and tells you nothing about who really sent it.\"",
                        "\"Convincing design is exactly what makes phishing effective. It's not something you can rule out by.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Link",
                  evidence: [
                    "The button was labeled \"Verify My Identity\"",
                    "Hovering over the button would have shown a preview of the real destination",
                    "That destination had no connection to the company's real infrastructure"
                  ],
                  question: "Without clicking, how could an employee check where that button actually led?",
                  options: [
                    {
                      text: "There's no way to know until you click it.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator pulls up a browser to check.",
                        "\"Actually, there's a two-second way to check.\""
                      ],
                      explanation: [
                        "\"Hovering your cursor over a link, without clicking, shows the real destination.\"",
                        "\"You never have to click something to see where it goes.\""
                      ]
                    },
                    {
                      text: "Since the page matched the real sign-on portal exactly, it was probably fine.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator looks unconvinced.",
                        "\"That's actually backwards.\""
                      ],
                      explanation: [
                        "\"A convincing copy of a login page shows the attacker's effort. It doesn't show that the link is legitimate.\"",
                        "\"Appearance and destination are two separate things entirely.\""
                      ]
                    },
                    {
                      text: "Hovering over the link before clicking shows the real destination.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator opens their own laptop to demonstrate.",
                        "\"Exactly right. This habit alone catches most fake links.\""
                      ],
                      explanation: [
                        "\"A quick hover here would have shown an address with no connection to the company at all.\"",
                        "\"Button text can say anything. The link underneath is much harder to disguise convincingly.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Urgency",
                  evidence: [
                    "The email gave a 60-minute expiration window",
                    "It implied the account was already at risk from an active sign-in attempt",
                    "The company's real IT alerts have never included an expiring countdown"
                  ],
                  question: "Why did this email include such a tight deadline?",
                  options: [
                    {
                      text: "To rush people into acting before they stop and verify it.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods.",
                        "\"That's the entire purpose of a deadline like this.\""
                      ],
                      explanation: [
                        "\"This is the same manipulation technique called urgency pressure. It's one of the most reliable tools in phishing and business email compromise.\"",
                        "\"These campaigns are frequently timed for end of day, exactly when people want to close their laptop and stop thinking about work.\"",
                        "\"Any message pushing you to act immediately is worth slowing down for instead.\""
                      ]
                    },
                    {
                      text: "Because real security alerts genuinely need to be resolved that quickly.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the company's actual incident response policy.",
                        "\"Nothing in our real process works like that.\""
                      ],
                      explanation: [
                        "\"A genuine concern can be verified by logging in directly, through channels you already trust, on your own time.\"",
                        "\"A countdown timer isn't part of any legitimate account security process here.\""
                      ]
                    },
                    {
                      text: "That's just the standard subject line format for IT security alerts.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator pulls up several past IT alerts for comparison.",
                        "\"Let's see if that actually holds up.\""
                      ],
                      explanation: [
                        "\"None of the company's real security alerts have ever used an expiring countdown like this.\"",
                        "\"That phrasing is chosen deliberately to create pressure. It isn't a standard format at all.\""
                      ]
                    }
                  ]
                }
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
