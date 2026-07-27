const bankPhishingArtifact = {
  title: "Email Comparison",

  description: [
    "The investigator places two emails side by side.",
    "One is a legitimate message from your bank.",
    "The other is the phishing email involved in the incident.",
    "\"Your goal is to examine the fake email and identify the suspicious elements.\"",
    "\"Scammers often copy real banking emails closely, so the warning signs are usually hidden in small details.\""
  ],

  fakeEmail: {
    label: "Suspicious Email (Fake)",

    blocks: [

      {
        id: "fake_sender",
        compareWith: "real_sender",
        text:
          "From: Bank Security Team <security@secure-bank-alert.com>",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "The sender name looks like it belongs to your bank, but the actual email address does not match the bank's official domain.\n\n" +
          "Scammers can make an email appear to come from almost anyone by changing the display name. The address behind it is what you should check."
      },


      {
        id: "fake_subject",
        compareWith: "real_subject",
        text:
          "Subject: Important: Unusual Activity On Your Account",

        type: "safe",

        explanation:
          "Not quite. The subject line alone is not enough evidence.\n\n" +
          "Banks really do send security alerts about unusual activity, so this wording can appear in both genuine and fake messages.\n\n" +
          "The important clues are usually found in what the email asks you to do next."
      },


      {
        id: "fake_greeting",
        compareWith: "real_greeting",
        text:
          "Dear Valued Customer,\n\n" +
          "We have detected unusual activity on your account and need you to confirm your identity.",

        type: "safe",

        explanation:
          "Not quite. A generic greeting can be suspicious, but it is not always proof of a scam.\n\n" +
          "Some real companies use general greetings in automated emails.\n\n" +
          "You should look for stronger signs, such as unusual requests or links."
      },


      {
        id: "fake_message",
        compareWith: "real_message",
        text:
          "For your security, please verify your account details immediately to prevent unauthorised access.",

        type: "safe",

        explanation:
          "Not quite. Banks often remind customers to protect their accounts.\n\n" +
          "The message sounds reasonable on its own.\n\n" +
          "The problem is what happens next: the email tries to move you to a login page through a link."
      },


      {
        id: "fake_urgency",
        compareWith: "real_urgency",
        text:
          "Your account will be temporarily restricted unless you verify your identity within the next 2 hours.",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "This message creates panic by giving you a very short deadline.\n\n" +
          "Scammers use urgency to make people act quickly instead of stopping to check whether the message is genuine.\n\n" +
          "A real bank will rarely force you to fix an account problem through a link within only a couple of hours."
      },


      {
        id: "fake_button",
        compareWith: "real_button",
        text:
          "[ Verify My Account Now ]",

        type: "suspicious",

        explanation:
          "Suspicious element found.\n\n" +
          "The email is asking you to sign in through a link inside the message.\n\n" +
          "The button itself looks normal, but it actually leads to:\n\n" +
          "https://secure-bank-account-check.com/login\n\n" +
          "This address does not belong to your bank. Scammers often create convincing domains by adding words like 'security', 'verify', or 'account'.\n\n" +
          "The safest approach is to open your banking app yourself or type the bank's website address manually."
      },

      {
        id: "fake_closing",
        compareWith: "real_closing",
        text:
          "If you have any questions, please contact our support team.",

        type: "safe",

        explanation:
          "Not quite. A professional closing can appear in both real and fake emails.\n\n" +
          "You need to focus on the details that are harder for scammers to copy."
      }

    ]
  },


  realEmail: {

    label: "Legitimate Email (Real)",

    blocks: [

      {
        id: "real_sender",
        text:
          "From: Your Bank Security Team <security@yourbank.com>"
      },


      {
        id: "real_subject",
        text:
          "Subject: Important: Unusual Activity On Your Account"
      },


      {
        id: "real_greeting",
        text:
          "Hello Sam,\n\n" +
          "We noticed a recent sign-in attempt on your account and wanted to let you know."
      },


      {
        id: "real_message",
        text:
          "If you believe this activity was not you, please open your banking app or visit our official website directly.\n\n" +
          "We will never ask you to confirm your password through a link in an email."
      },

      {
        id: "real_urgency",
        text:
          "For your security, please review this as soon as possible."
      },


      {
        id: "real_button",
        text:
          "[ Open Banking App ]"
      },


      {
        id: "real_closing",
        text:
          "If you need assistance, please contact us using the phone number on the back of your bank card."
      }

    ]
  },


  requiredClues: [
    "fake_sender",
    "fake_urgency",
    "fake_button"
  ]
};

const olderAdultPhishingCase = {
  id: "phishing_olderadult",
  meta: {
    title: "Phishing Email",
    description: "A convincing bank email, a two-hour deadline, and one click that decides whether this stays a quiet evening or becomes a very stressful week.",
    difficulty: "Medium",
    ageGroup: "older-adult",
    style: "Artifact Analysis"
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
              artifact: bankPhishingArtifact,
              artifactComplete: [
                "The investigator closes the two emails and places them beside the account activity records.",
                "\"Now we know what made this email suspicious,\" the investigator explains.",
                "\"The attacker copied the appearance of a real bank message, but the small details revealed what was actually happening.\"",
                "The investigator points to the fake sender address, the rushed deadline, and the login button.",
                "\"The email was not dangerous because it looked fake. It was dangerous because it looked real enough to make someone stop checking.\"",
                "\"Now that we understand the warning signs, let's zoom out and look at the full timeline of how this attack unfolded.\""
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
              chainSummary: [
                "Fake bank email",
                "Urgent deadline",
                "Fake login page",
                "Password stolen",
                "Bank account accessed",
                "Email account compromised",
                "Family targeted",
                "Damage contained",
                "Accounts recovered"
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
              epilogue: {
                time: "Five months later",
                story: [
                  "Since the incident, you have changed how you handle unexpected emails.",
                  "You no longer click links that claim your account has a problem. Instead, you open your bank's app directly or call the number on your card.",
                  "You also started using different passwords for important accounts and enabled extra security checks where possible.",
                  "When a friend mentions receiving a suspicious message, you share what happened to you and remind them to slow down before clicking.",
                  "The scam was stressful, but it changed the way you protect yourself online."
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
              artifact: bankPhishingArtifact,
              artifactComplete: [
                "The investigator closes the two emails and places them beside the scam reports collected by the bank.",
                "\"Now we know what made this email suspicious,\" the investigator explains.",
                "\"The same warning signs were hidden inside every copy of this message that was sent out.\"",
                "The investigator points to the fake sender address, the urgent deadline, and the fake verification button.",
                "\"The difference was not the email itself. The difference was what happened after it was opened.\"",
                "\"Now that we understand the clues, let's zoom out and look at the wider timeline of this phishing campaign.\""
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
              chainSummary: [
                "Fake bank email",
                "Urgency noticed",
                "Bank app opened",
                "Link avoided",
                "Account protected",
                "Scam reported",
                "Habits changed"
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
              epilogue: {
                time: "Three months later",
                story: [
                  "The experience changed the way you look at online messages.",
                  "You still receive emails that appear urgent, but now you take a moment before reacting.",
                  "You check the sender, avoid unexpected links, and contact organisations directly when something feels unusual.",
                  "You have even helped friends and family recognise similar scams before they fall for them.",
                  "A few seconds of caution became one of your strongest online safety habits."
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
