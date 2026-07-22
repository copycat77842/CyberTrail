const studentPhishingCase = {
  id: "phishing_student",
  meta: {
    title: "Phishing Email",
    description: "Can you spot a fake login page before it costs you your school account and your friends' trust?",
    difficulty: "Easy",
    ageGroup: "student"
  },
  intro: [
    "Phishing doesn't hack anything. It just asks nicely, and hopes you're too rushed to notice.",
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
              intro: [
                "A few days later, the school's IT department sits down with you and your parents to explain what actually happened.",
                "A digital forensics investigator working with the school pulls up the original email next to a real one from the platform.",
                "\"This wasn't a hack in the way people usually picture it,\" the investigator explains.",
                "\"Nobody broke into the school's systems. Someone just built a convincing fake page, and it worked.\"",
                "\"Let's go through exactly what gave it away, because something always does.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Sender",
                  evidence: [
                    "The email's display name read \"Learning Platform Support\"",
                    "The actual sender address was support@learnportal-verify.com",
                    "The school's real platform only ever emails from @yourschoolplatform.edu"
                  ],
                  question: "The display name looked completely normal. What should have been checked instead?",
                  options: [
                    {
                      text: "Whether the email contained spelling or grammar mistakes.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator rereads the email's wording carefully.",
                        "\"That's usually a good instinct, but not this time.\""
                      ],
                      explanation: [
                        "\"There isn't a single typo in this email. It's written just as cleanly as the real thing.\"",
                        "\"Spelling mistakes can sometimes be a clue, but plenty of convincing scams read perfectly. It's not something you can rely on.\""
                      ]
                    },
                    {
                      text: "The actual email address behind the display name.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator highlights the real address.",
                        "\"That's the part that can't be faked as easily.\""
                      ],
                      explanation: [
                        "\"The real platform only ever sends mail from one exact domain.\"",
                        "\"This email came from a completely different address, dressed up with a familiar-looking name.\"",
                        "\"Checking the actual address, not just the name, is the single fastest way to catch this.\""
                      ]
                    },
                    {
                      text: "The email's formatting and logo.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator holds the two emails up together.",
                        "\"Honestly, they're almost identical.\""
                      ],
                      explanation: [
                        "\"Copying a logo and color scheme takes minutes. It tells you nothing about who really sent it.\"",
                        "\"Convincing design is what makes phishing emails work in the first place. It isn't a red flag by itself.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Link",
                  evidence: [
                    "The button was labeled \"Verify My Account\"",
                    "Hovering over the button, without clicking, would have shown a preview of the real destination",
                    "That destination was a domain unrelated to the school entirely"
                  ],
                  question: "The button text looked completely normal. How could you have checked where it actually led, before clicking?",
                  options: [
                    {
                      text: "There's no way to know where a link goes until you click it.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator opens a browser to demonstrate.",
                        "\"Actually, there is, and it takes about two seconds.\""
                      ],
                      explanation: [
                        "\"On a computer, hovering your mouse over a link shows the real destination, usually in the bottom corner of the screen.\"",
                        "\"On a phone, holding down on the link does the same thing.\"",
                        "\"You never have to click something to find out where it actually leads.\""
                      ]
                    },
                    {
                      text: "The page looked so convincing that the link had to be safe.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator points back at the fake page's design.",
                        "\"That's actually backwards.\""
                      ],
                      explanation: [
                        "\"A convincing copy of a page shows the attacker put in effort. It doesn't tell you where the link underneath actually goes.\"",
                        "\"Looks and destination are two completely separate things.\""
                      ]
                    },
                    {
                      text: "Hovering over the link before clicking would have shown the real destination.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator demonstrates on their own screen.",
                        "\"Exactly. This one habit catches most fake links.\""
                      ],
                      explanation: [
                        "\"A quick hover would have shown a web address with nothing to do with your school.\"",
                        "\"Button text can say anything. The actual link underneath is much harder to disguise well.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Urgency",
                  evidence: [
                    "The email gave a 2-hour deadline to verify the account",
                    "It threatened suspended access if you didn't act in time",
                    "The real platform has never sent an email with a countdown like this"
                  ],
                  question: "Why do phishing emails almost always include a tight deadline like this one?",
                  options: [
                    {
                      text: "To make you act quickly, before you have time to stop and check if it's real.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods slowly.",
                        "\"That's the entire purpose of it.\""
                      ],
                      explanation: [
                        "\"This is a manipulation technique called urgency pressure. It works by rushing you past the moment where you'd normally stop and think.\"",
                        "\"You clicked at 9:47 PM with an assignment due at 8:30 AM. That timing wasn't an accident on the attacker's part.\"",
                        "\"Any message that pressures you to act immediately is worth slowing down for, not speeding up for.\""
                      ]
                    },
                    {
                      text: "Because school platforms often have real security deadlines.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the platform's actual policies.",
                        "\"Nothing like this exists in their real security process.\""
                      ],
                      explanation: [
                        "\"Legitimate account issues almost never come with a countdown measured in hours.\"",
                        "\"If something is genuinely wrong with an account, you can usually verify it by logging in directly, on your own time.\""
                      ]
                    },
                    {
                      text: "That's just the standard subject line format official emails use.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator pulls up a few real emails from the platform for comparison.",
                        "\"Let's see if that actually holds up.\""
                      ],
                      explanation: [
                        "\"None of the platform's real emails use countdown language like this, not once in its history.\"",
                        "\"That phrasing is chosen deliberately to create pressure. It isn't a standard format at all.\""
                      ]
                    }
                  ]
                }
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
              intro: [
                "A few days after the school-wide notice, an IT staff member walks your class through exactly what happened, with a digital forensics investigator brought in to help explain it.",
                "\"A good number of you got this exact email,\" the investigator says, pulling it up on the screen.",
                "\"Some of you clicked it. Some of you didn't. Let's figure out what actually made the difference.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Sender",
                  evidence: [
                    "The email's display name read \"Learning Platform Support\"",
                    "The actual sender address was support@learnportal-verify.com",
                    "The school's real platform only ever emails from @yourschoolplatform.edu"
                  ],
                  question: "The display name looked completely normal. What actually gave this one away?",
                  options: [
                    {
                      text: "The actual email address behind the display name.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator points out the mismatched address instead.",
                        "\"That's exactly the part worth checking.\""
                      ],
                      explanation: [
                        "\"The real platform only ever sends mail from one exact domain.\"",
                        "\"This email came from a completely different address, dressed up with a familiar-looking name.\"",
                        "\"That mismatch is usually the fastest way to catch something like this.\""
                      ]
                    },
                    {
                      text: "Spelling or grammar mistakes in the email.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator rereads the email's wording again.",
                        "\"There weren't any, actually.\""
                      ],
                      explanation: [
                        "\"This one was written cleanly, with no typos at all.\"",
                        "\"That surprises people. Spelling mistakes aren't a reliable test anymore, since plenty of convincing scams read perfectly.\""
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
                        "\"Copying a logo and color scheme takes minutes and tells you nothing about who really sent it.\"",
                        "\"Convincing design is exactly what makes phishing work. It's not something you can rule out by.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Link",
                  evidence: [
                    "The button was labeled \"Verify My Account\"",
                    "Hovering over the button would have shown a preview of the real destination",
                    "That destination was a domain unrelated to the school entirely"
                  ],
                  question: "Without clicking, how could a student check where that button actually led?",
                  options: [
                    {
                      text: "There's no way to know until you click it.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator opens a browser to demonstrate.",
                        "\"Actually, there's a two-second way to check.\""
                      ],
                      explanation: [
                        "\"On a computer, hovering the mouse over a link shows the real destination, usually in the corner of the screen.\"",
                        "\"On a phone, pressing and holding does the same thing.\"",
                        "\"You never have to click something to see where it goes.\""
                      ]
                    },
                    {
                      text: "Hovering over the link before clicking shows the real destination.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator pulls up their own browser to show you.",
                        "\"Exactly right. This habit alone catches most fake links.\""
                      ],
                      explanation: [
                        "\"A quick hover here would have shown an address with nothing to do with the school at all.\"",
                        "\"Button text can say anything. The link underneath is much harder to disguise convincingly.\""
                      ]
                    },
                    {
                      text: "If the page looks identical to the real one, the link is safe.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"That's actually the opposite of true here.\""
                      ],
                      explanation: [
                        "\"A convincing copy of a page tells you the attacker put in effort, not that the link is safe.\"",
                        "\"Appearance and destination are two completely separate things.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Urgency",
                  evidence: [
                    "The email gave a 2-hour deadline to verify the account",
                    "It threatened suspended access if students didn't act in time",
                    "The real platform has never sent an email with a countdown like this"
                  ],
                  question: "Why did this email include such a tight deadline?",
                  options: [
                    {
                      text: "Because the school's real security process works that way.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the platform's actual policy.",
                        "\"Nothing like this exists in their real process.\""
                      ],
                      explanation: [
                        "\"Legitimate account issues almost never come with a countdown measured in hours.\"",
                        "\"If something is genuinely wrong, you can normally check it by logging in directly, whenever you want.\""
                      ]
                    },
                    {
                      text: "That's just the standard subject line format official emails use.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator pulls up a few real emails from the platform to compare.",
                        "\"Let's see if that actually holds up.\""
                      ],
                      explanation: [
                        "\"None of the platform's real emails use countdown language like this.\"",
                        "\"That phrasing is chosen deliberately to create pressure. It isn't a standard format at all.\""
                      ]
                    },
                    {
                      text: "To rush people into acting before they stop and check if it's real.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods.",
                        "\"That's the entire purpose of a deadline like this.\""
                      ],
                      explanation: [
                        "\"This is a manipulation technique called urgency pressure. It's built to short-circuit careful thinking.\"",
                        "\"These emails often go out at night, right when homework is due, exactly when people are least likely to slow down.\"",
                        "\"Any message pushing you to act immediately is worth slowing down for instead.\""
                      ]
                    }
                  ]
                }
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
