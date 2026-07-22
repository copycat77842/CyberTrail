const olderAdultPhishingCase = {
  id: "phishing_olderadult",
  meta: {
    title: "Phishing Email",
    description: "A convincing bank email, a two-hour deadline, and one click that decides whether this stays a quiet evening or becomes a very stressful week.",
    difficulty: "Medium",
    ageGroup: "older-adult"
  },
  intro: [
    "It's a Wednesday evening, and you're settling in with a cup of tea after dinner.",
    "Your tablet chimes with a new email.",
    "It's from your bank, or at least it looks like it is.",
    "The subject line reads: \"Important: Unusual Activity On Your Account.\""
  ],
  setup: [
    "You open it. The email has your bank's logo at the top, in the same blue you're used to seeing on their website.",
    "\"We have detected unusual activity on your account. To protect your funds, please verify your identity within 2 hours, or your account may be temporarily restricted.\"",
    "Below is a button: \"Verify My Account Now.\"",
    "Your stomach tightens a little. Restricted account? That sounds serious.",
    "You think about calling your adult child to ask what to do, but it's getting late, and this seems simple enough to handle yourself.",
    "Your finger hovers over the button."
  ],
  choice: {
    text: "What do you do?",
    options: [
      {
        text: "Click the button and verify your account.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You click \"Verify My Account Now.\"",
              "A login page opens up, looking just like your bank's website. Same colours, same layout, even the little padlock icon in the corner.",
              "You type in your username and password carefully, the way you always do.",
              "The page reloads: \"Verification Successful. Redirecting you to your account...\"",
              "It takes you to what looks like your account summary.",
              "Relieved, you close the tablet and go back to your tea."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "The rest of the evening passes normally.",
              "The next day is much the same as any other: errands, a phone call with a friend, dinner.",
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
                  "A little after 9 PM, while you're watching television, someone logs into your real bank account using the details you just typed into the fake page.",
                  "They don't move any money yet. First they look around: your balance, your recent transactions, the phone number and email on file."
                ]
              },
              {
                time: "The next morning",
                story: [
                  "Your adult child calls, sounding worried. \"Did you email me asking for gift cards? That's not like you.\"",
                  "You have no idea what they're talking about."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "The attacker didn't stop at your bank account.",
              "The same login details you typed into the fake page were tried against your email account too, since you'd used the same password for both.",
              "Once inside your email, they found your adult child's address in your contacts and sent an urgent message, made to look like it was from you: a story about being stuck somewhere and needing gift cards right away.",
              "They also quietly changed the contact phone number on your bank account to one they controlled.",
              "Nobody broke into anything. They just used a password you typed in willingly, on a page built to look exactly like the real thing."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You call the bank straight away. It takes a while to get through, and longer still to convince them the request to change your contact number wasn't really you.",
              "Together with your adult child, you spend most of the day on the phone: the bank, your email provider, and eventually the police, just to have it on record.",
              "The bank reverses two small transactions the attacker managed to make before everything was frozen.",
              "Your adult child, thankfully, called you before sending any gift cards. Not everyone in your contacts was so lucky, and one old friend nearly did.",
              "It takes almost a week to feel like everything is properly back in order."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A few days later, your bank arranges a call to walk you through exactly what happened.",
                "A digital forensics investigator joins, your adult child on the call too, and pulls up the original email next to a real one from the bank.",
                "\"This wasn't a break-in, the way people usually picture one,\" the investigator explains.",
                "\"Nobody broke into the bank's systems. Somebody built a very convincing fake page, and it worked.\"",
                "\"Let's go through exactly what should have stood out.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Sender",
                  evidence: [
                    "The email's display name read \"Bank Security Team\"",
                    "The actual sender address was security@yourbank-verify-online.com",
                    "The real bank only ever emails from @yourbank.com"
                  ],
                  question: "The display name looked completely normal. What should have been checked instead?",
                  options: [
                    {
                      text: "The actual email address behind the display name.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator draws attention to the real address.",
                        "\"That's the part that can't be faked as easily.\""
                      ],
                      explanation: [
                        "\"Your real bank only ever sends mail from one exact address.\"",
                        "\"This email came from a completely different address, dressed up with a familiar-looking name.\"",
                        "\"Checking the actual address is the fastest way to catch this kind of email.\""
                      ]
                    },
                    {
                      text: "Whether the email contained any spelling or grammar mistakes.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator rereads the email's wording carefully.",
                        "\"That's usually a good instinct, but not this time.\""
                      ],
                      explanation: [
                        "\"There isn't a single mistake in this email. It's written just as cleanly as the real thing.\"",
                        "\"Spelling mistakes can sometimes be a clue, but plenty of convincing scams read perfectly. It's not something you can rely on.\""
                      ]
                    },
                    {
                      text: "The email's formatting and logo.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator holds the two emails up together.",
                        "\"They're almost identical.\""
                      ],
                      explanation: [
                        "\"Copying a logo and colour scheme takes only minutes and tells you nothing about who sent it.\"",
                        "\"Looking convincing is exactly what makes these emails work. It's not something you can rule out by.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Link",
                  evidence: [
                    "The button was labeled \"Verify My Account Now\"",
                    "Hovering over the button (without clicking) would have shown a preview of the real destination",
                    "That destination was a website entirely unrelated to the bank"
                  ],
                  question: "Without clicking, how could you have checked where that button actually led?",
                  options: [
                    {
                      text: "There's no way to know where a link goes until you click it.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator opens the email again to demonstrate.",
                        "\"Actually, there is, and it only takes a moment.\""
                      ],
                      explanation: [
                        "\"On a tablet or phone, pressing and holding a link shows a preview of where it actually goes, without opening it.\"",
                        "\"On a computer, hovering the mouse over it does the same thing.\"",
                        "\"You never have to click something to find out where it leads.\""
                      ]
                    },
                    {
                      text: "Pressing and holding the link would have shown the real destination.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator demonstrates on their own tablet.",
                        "\"Exactly right. This one habit catches most fake links.\""
                      ],
                      explanation: [
                        "\"That preview would have shown an address with nothing to do with your bank at all.\"",
                        "\"Button text can say anything. The actual link underneath is much harder to disguise convincingly.\""
                      ]
                    },
                    {
                      text: "Since the page looked exactly like the real banking site, the link had to be safe.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head gently.",
                        "\"That's actually the opposite of true here.\""
                      ],
                      explanation: [
                        "\"A convincing copy of a website shows the attacker put in effort. It doesn't tell you the link is legitimate.\"",
                        "\"Appearance and actual destination are two completely different things.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Urgency",
                  evidence: [
                    "The email gave a 2-hour deadline to \"verify\" the account",
                    "It warned the account could be restricted if you didn't act in time",
                    "The real bank has never sent an email with a countdown like this"
                  ],
                  question: "Why do emails like this almost always include a tight deadline?",
                  options: [
                    {
                      text: "Because banks really do need account issues resolved that quickly.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks with the bank's actual policy.",
                        "\"Nothing like this exists in their real process.\""
                      ],
                      explanation: [
                        "\"A genuine concern with your account can usually be checked by calling the bank directly, or logging in yourself, in your own time.\"",
                        "\"A countdown measured in hours isn't part of any real bank's normal process.\""
                      ]
                    },
                    {
                      text: "It's just how banks normally write these kinds of emails.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator pulls up a real email from the bank for comparison.",
                        "\"Take a look. It reads nothing like this.\""
                      ],
                      explanation: [
                        "\"Real bank communications tend to be calmer and don't threaten to restrict your account within hours.\"",
                        "\"That pressure and tight deadline is a strong sign something isn't right.\""
                      ]
                    },
                    {
                      text: "To make you act quickly, before you have time to stop and think it through.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods slowly.",
                        "\"That's the entire purpose of it.\""
                      ],
                      explanation: [
                        "\"This is a manipulation technique called urgency pressure. It's one of the most common tools people who send these emails rely on, designed to stop you from pausing to check.\"",
                        "\"You saw this at the end of a quiet evening, exactly when you'd want to just get it sorted quickly.\"",
                        "\"Any message that pressures you to act immediately is worth slowing down for, not speeding up for.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lines up the email, the fake page, and your account's activity log in order.",
                "\"Let's walk through exactly how this played out, step by step,\" they say."
              ],
              timeline: [
                {
                  time: "Wednesday, 7:20 PM",
                  story: [
                    "You open the email and click \"Verify My Account Now.\"",
                    "The fake login page loads, styled to look identical to your real bank's website."
                  ]
                },
                {
                  time: "Wednesday, 7:21 PM",
                  story: [
                    "You enter your real username and password.",
                    "The page instantly sends your details to the attacker, then redirects you to what looks like your account, so nothing seems wrong."
                  ]
                },
                {
                  time: "Wednesday, 9:04 PM",
                  story: [
                    "The attacker logs into your real bank account for the first time using those details.",
                    "They look around first, then try the same password against your email account. It works there too."
                  ]
                },
                {
                  time: "Wednesday, 9:20 PM",
                  story: [
                    "From inside your email, the attacker finds your adult child's contact details and sends an urgent message asking for gift cards, made to look like it's from you.",
                    "They also request a change to the contact phone number on your bank account."
                  ]
                },
                {
                  time: "Thursday, 8:15 AM",
                  story: [
                    "Your adult child calls, concerned about the strange message.",
                    "You realize something is very wrong."
                  ]
                },
                {
                  time: "Thursday, 8:40 AM",
                  story: [
                    "You call the bank. They catch the phone number change request just before it's approved, and freeze further activity on the account."
                  ]
                }
              ],
              finalWords: [
                "The investigator closes the folder.",
                "\"This wasn't about you being careless. This page was built specifically to be convincing.\"",
                "\"But every fake page leaves clues, if you know to look for them before typing anything in.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator leaves you and your adult child with a few habits that would have stopped this before it started.",
                  "\"None of these take long. That's exactly the point.\""
                ],
                advice: [
                  {
                    title: "Check the actual sender address, not just the name",
                    text: "A display name can say 'Bank Security Team.' The real address behind it is much harder to fake convincingly, so always check it."
                  },
                  {
                    title: "Press and hold a link to preview it before tapping",
                    text: "This shows you the real destination without opening anything. Never trust button text alone."
                  },
                  {
                    title: "Go to your bank's app or website yourself instead of clicking through",
                    text: "If an email claims something's wrong with your account, open the banking app you already use, or type the website address in yourself."
                  },
                  {
                    title: "Treat urgency as a warning sign",
                    text: "A tight deadline and a threat of a restricted account are designed to rush you. Real account issues rarely need fixing within a couple of hours."
                  },
                  {
                    title: "Call someone before you click, if anything feels off",
                    text: "A quick call to your bank, using the number on your card rather than the one in the email, or to a family member, can settle it in minutes."
                  }
                ]
              },
              lesson: [
                "A fake page only needs one thing from you: your password, typed in willingly.",
                "A two-minute phone call to check is always cheaper than a week spent undoing the damage."
              ]
            }
          }
        ]
      },
      {
        text: "Go to your bank's app or website yourself instead of clicking the link.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "Something about the email doesn't sit right with you.",
              "Your bank has never sent you anything with a countdown like this before.",
              "Instead of clicking the button, you set the tablet down and pick up your phone to open the banking app you already have installed.",
              "You log in the normal way. No warning, no message about unusual activity, nothing.",
              "Your account looks exactly the way you left it."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "A little reassured, you go back to your tea.",
              "The next day passes normally: errands, a phone call with a friend, the usual routine.",
              "You mention the odd email to your adult child that evening, half wondering if you were overreacting."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "The next evening",
                story: [
                  "Your adult child says they got a very similar email too, supposedly from their own bank.",
                  "\"Good thing you didn't click it,\" they say. \"That's exactly the kind of thing that catches people out.\""
                ]
              },
              {
                time: "A few days later",
                story: [
                  "You see a news segment about a wave of fake bank emails targeting older customers specifically, with a screenshot almost identical to the one you received.",
                  "You feel a small chill, realizing how close you came to clicking it yourself."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "The email you received was part of a much larger campaign, sent to a large number of people at once.",
              "For those who clicked through and entered their details, the fake page passed those details straight to the attacker, who used them to log into the real accounts within hours. No break-in was involved. It was just a convincing page and a moment of rushed trust.",
              "For you, the fake page received nothing. There was no password for it to steal, because you never typed one into it.",
              "It simply sat there, waiting for someone else to fall for it."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You feel a quiet sense of relief, and a little pride, at having caught it.",
              "An old friend from your book club wasn't so fortunate. Locked out of her account for several days, a stressful call with the bank, an unpleasant surprise for her own family.",
              "You compare the email you each received. Word for word, they're identical.",
              "The only difference was what happened after opening it."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A little while after the news segment, your bank holds an information session for customers who want to understand these scams better.",
                "A digital forensics investigator explains what happened, using the exact email as an example, with your adult child joining you.",
                "\"A great many people received this exact email,\" the investigator says.",
                "\"Some clicked it. Some didn't. Let's look at what actually made the difference.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Sender",
                  evidence: [
                    "The email's display name read \"Bank Security Team\"",
                    "The actual sender address was security@yourbank-verify-online.com",
                    "The real bank only ever emails from @yourbank.com"
                  ],
                  question: "The display name looked completely normal. What actually gave this one away?",
                  options: [
                    {
                      text: "Whether the email contained spelling or grammar mistakes.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator rereads the wording again.",
                        "\"There weren't any, actually.\""
                      ],
                      explanation: [
                        "\"This one was written cleanly, with no mistakes at all.\"",
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
                        "\"Copying a logo and colour scheme takes minutes and tells you nothing about who really sent it.\"",
                        "\"Looking convincing is exactly what makes these emails effective.\""
                      ]
                    },
                    {
                      text: "The actual email address behind the display name.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator circles the real address for you.",
                        "\"That's exactly the part worth checking.\""
                      ],
                      explanation: [
                        "\"Your real bank only ever sends mail from one exact address.\"",
                        "\"This email came from a completely different one, dressed up with a familiar-sounding name.\"",
                        "\"That mismatch is usually the fastest way to catch something like this.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Link",
                  evidence: [
                    "The button was labeled \"Verify My Account Now\"",
                    "Pressing and holding the button would have shown a preview of the real destination",
                    "That destination was a website entirely unrelated to the bank"
                  ],
                  question: "Without tapping it, how could someone check where that button actually led?",
                  options: [
                    {
                      text: "Pressing and holding the link shows the real destination.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator shows you again, this time on your own device.",
                        "\"Exactly right. This habit alone catches most fake links.\""
                      ],
                      explanation: [
                        "\"That preview would have shown an address with nothing to do with the bank at all.\"",
                        "\"Button text can say anything. The link underneath is much harder to disguise convincingly.\""
                      ]
                    },
                    {
                      text: "There's no way to know until you tap it.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator picks up a tablet to demonstrate.",
                        "\"Actually, there's a simple way to check first.\""
                      ],
                      explanation: [
                        "\"Pressing and holding a link, rather than tapping it, shows a preview of where it really goes.\"",
                        "\"You never have to open something to see where it leads.\""
                      ]
                    },
                    {
                      text: "If the page looks exactly like the real banking site, it's safe to assume the link is too.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head, unconvinced.",
                        "\"That's actually the opposite of true.\""
                      ],
                      explanation: [
                        "\"A convincing copy of a website shows effort on the attacker's part. It doesn't show that the link is legitimate.\"",
                        "\"Appearance and destination are two separate things entirely.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Urgency",
                  evidence: [
                    "The email gave a 2-hour deadline to \"verify\" the account",
                    "It warned the account could be restricted if action wasn't taken in time",
                    "The real bank has never sent an email with a countdown like this"
                  ],
                  question: "Why did this email include such a tight deadline?",
                  options: [
                    {
                      text: "Because banks genuinely need issues resolved that quickly.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks with the bank's real policy.",
                        "\"Nothing like this exists in their actual process.\""
                      ],
                      explanation: [
                        "\"A genuine concern can normally be checked by calling the bank directly, using the number on your card, at your own pace.\"",
                        "\"A countdown measured in hours isn't part of any real bank's process.\""
                      ]
                    },
                    {
                      text: "To rush people into acting before they stop and think it through.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods.",
                        "\"That's the entire purpose of a deadline like this.\""
                      ],
                      explanation: [
                        "\"This is the same manipulation technique called urgency pressure. It's one of the most common tools relied on in scams like this.\"",
                        "\"These emails are often sent in the evening, exactly when people want to relax and deal with things quickly.\"",
                        "\"Any message pushing you to act immediately is worth slowing down for instead.\""
                      ]
                    },
                    {
                      text: "That's just the standard subject line format banks use.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator pulls up a real email from the bank for comparison.",
                        "\"Let's see if that actually holds up.\""
                      ],
                      explanation: [
                        "\"None of the bank's real emails have ever used a countdown like this.\"",
                        "\"That phrasing is chosen deliberately to create pressure. It isn't a standard format at all.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lines up the email, the fake page, and the wider pattern of similar reports in order.",
                "\"Let's see exactly where this split into two very different outcomes,\" they say.",
                "\"The same email, sent to a great many people. What happened afterward is what actually mattered.\""
              ],
              timeline: [
                {
                  time: "Wednesday, 7:20 PM",
                  story: [
                    "You open the email and notice the two-hour deadline feels unusual.",
                    "Instead of clicking through, you pick up your phone."
                  ]
                },
                {
                  time: "Wednesday, 7:23 PM",
                  story: [
                    "You log into your bank's official app directly.",
                    "No warning, no unusual activity message. Your account is exactly as you left it."
                  ]
                },
                {
                  time: "Wednesday, 9:04 PM",
                  story: [
                    "Elsewhere, others who received the same email click through and enter their details into the fake page.",
                    "Their accounts begin to be accessed shortly after."
                  ]
                },
                {
                  time: "Thursday morning",
                  story: [
                    "For at least one affected person, the attacker uses their compromised email to contact a family member asking for gift cards.",
                    "Yours is untouched. There was nothing on the fake page for the attacker to collect from you."
                  ]
                },
                {
                  time: "Later that week",
                  story: [
                    "A local news segment reports on the wave of fake bank emails, including a screenshot matching the one you received.",
                    "By now, a number of accounts have already been affected."
                  ]
                }
              ],
              finalWords: [
                "The investigator closes the folder.",
                "\"You didn't need to be an expert to catch this. You just paused for a moment before typing your password anywhere.\"",
                "\"That pause is the entire difference between this being nothing, and this being a very difficult week.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator leaves you and your adult child with a few habits worth keeping, even though this one worked out.",
                  "\"Catching one doesn't mean the next one will look just as obvious. These habits are what make it reliable every time.\""
                ],
                advice: [
                  {
                    title: "Check the actual sender address, not just the name",
                    text: "A display name can say 'Bank Security Team.' The real address behind it is much harder to fake convincingly, so always check it."
                  },
                  {
                    title: "Press and hold a link to preview it before tapping",
                    text: "This shows the real destination without opening anything. Never trust button text alone."
                  },
                  {
                    title: "Go to your bank's app or website yourself instead of clicking through",
                    text: "Exactly what you did here: open the app or type the address in yourself, rather than following a link from an email."
                  },
                  {
                    title: "Treat urgency as a warning sign",
                    text: "A tight deadline and a threat of a restricted account are designed to rush you. Real account issues rarely need fixing within a couple of hours."
                  },
                  {
                    title: "Call someone before you click, if anything feels off",
                    text: "A quick call to your bank, using the number on your card, or to a family member, can settle it in minutes, and it's always worth doing."
                  }
                ]
              },
              lesson: [
                "You didn't need to be an expert. You just needed a moment of doubt before typing your password.",
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
window.scenarios.push(olderAdultPhishingCase);
