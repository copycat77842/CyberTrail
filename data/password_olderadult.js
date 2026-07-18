const olderAdultPasswordCase = {
  id: "password_olderadult",
  meta: {
    title: "Password Breach",
    description: "How one reused password can put your pension, your bank account, and the people you care about at risk.",
    difficulty: "Medium",
    ageGroup: "older-adult"
  },
  intro: [
    "It's a quiet Tuesday morning, and you've just finished your coffee.",
    "Your adult child called last week to remind you: the pension office is moving everything online.",
    "\"It's easy,\" they said. \"I'll help if you need it. You'll be able to check your payments any time, right from your laptop.\"",
    "You've been putting it off, but this morning feels like a good time to finally sit down and set it up.",
    "You find the letter from the pension office, with the website address printed at the top, and open your laptop."
  ],
  setup: [
    "The website looks official enough - the same crest from the letter, the same formal blue and white.",
    "You type in your name, your date of birth, your reference number from the letter.",
    "It's slower going than you'd like, but you get through it.",
    "Then a field appears: Create a password for your account.",
    "You think for a moment.",
    "You have a password you've used for years, which you use for your email, for online banking, for the shopping website your adult child set up for you.",
    "It's easy to remember, which matters more to you than anything else right now.",
    "A note beneath the field suggests using a different password than ones you've used elsewhere.",
    "You're not entirely sure why that would matter. It's a strong password. Nobody could guess it.",
    "You decide to just get this over with."
  ],
  choice: {
    text: "What password do you set for your pension account?",
    options: [
      {
        text: "Use the same password you use for everything else.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You type in the password you always use - the same one for your email, your banking, and now, your pension account.",
              "It feels familiar under your fingers. You don't even have to think about it.",
              "The note about using a different password is still there on the screen.",
              "You're not quite sure what difference it would really make, and you're eager to finish before lunch.",
              "You click Confirm, and the screen shows a green tick.",
              "\"Account created successfully.\"",
              "You feel a small sense of accomplishment. One more thing done."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "Over the following weeks, checking the pension website becomes a small part of your routine.",
              "Once a fortnight or so, you log in to check that your payment has come through.",
              "Your adult child is proud of you for getting comfortable with it.",
              "You use the same email and the same password for nearly everything you do online - it's simply easier to keep track of that way."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "One month later",
                story: [
                  "Your adult child mentions something over dinner - a news story about a shopping website being hacked, millions of accounts affected.",
                  "\"Isn't that the one you use?\" they ask.",
                  "You think about it. You do have an account there, though you can't remember the last time you used it.",
                  "\"I'm sure it's fine,\" you say. \"I haven't used that in ages.\"",
                  "The conversation moves on to something else."
                ]
              },
              {
                time: "Two months later",
                story: [
                  "The shopping website's breach, the one from dinner conversation weeks ago, quietly resurfaces.",
                  "The stolen information - including your email address and that familiar password - ends up for sale on a website you'll never see, to people you'll never meet.",
                  "Nothing about your day changes. You have no way of knowing any of this has happened."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "Late one evening, while you're watching television, automated systems on the other side of the world begin working through the stolen list.",
              "Thousands of email addresses, each paired with a password, tested one after another against banks, email providers, and government services.",
              "Your email is tried first. The password matches.",
              "Once inside, whoever is on the other end doesn't need to guess anything else.",
              "They search your inbox and find an email from the pension office: \"Your account has been created successfully.\"",
              "They try the same password there.",
              "It matches again.",
              "Then they search further and find an old email confirming your online banking was set up with the very same details.",
              "Three accounts. One password. Nothing forced open - every door was simply unlocked with a key that already existed."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You notice something is wrong three days later, when you try to log into your email and your password doesn't work.",
              "You assume you've simply mistyped it and try again slowly. It still doesn't work.",
              "A little confused, you call your adult child.",
              "They help you get back into your email that evening - but while they're looking through it with you, they notice something odd: several sent emails you don't remember writing, asking your closest friends and family for gift cards \"urgently, before the shops close.\"",
              "Your face goes pale.",
              "You call the pension office the next morning and learn your bank details on file were changed two days ago.",
              "Thankfully, a payment hadn't gone out yet, and they're able to freeze the account before anything is paid to the wrong place.",
              "Your bank is more difficult. Several transactions have already gone through - small enough, at first, not to be immediately flagged.",
              "Over the following two weeks, you and your adult child spend hours on the phone with your bank, your email provider, and the pension office, proving again and again that the accounts are really yours.",
              "One of your oldest friends had already sent a gift card before anyone realized what was happening.",
              "It takes almost a month to feel like things are properly back to normal."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A couple of weeks later, your bank arranges a call with a digital forensics investigator to walk you through what actually happened.",
                "Your adult child joins the call too, notepad in hand.",
                "\"I want to start by saying this wasn't carelessness on your part,\" the investigator says. \"This happens to people who are very careful, every single day.\"",
                "\"What happened here is something we see constantly. Let's go through the evidence together.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The First Door",
                  evidence: [
                    "A successful email login occurred at 11:20 PM from an unfamiliar device",
                    "The correct password was entered on the very first attempt",
                    "No suspicious links or attachments were found in your inbox beforehand"
                  ],
                  question: "There's no phishing email, no suspicious link you clicked. How did they get into your email in the first place?",
                  options: [
                    {
                      text: "They must have called and tricked you into giving it to them.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks your phone records for that period.",
                        "\"There's no call logged around that time at all.\""
                      ],
                      explanation: [
                        "\"This particular attack didn't involve any phone calls or direct contact with you.\"",
                        "\"It happened entirely in the background, without you ever being approached directly.\""
                      ]
                    },
                    {
                      text: "The password had already been exposed in an unrelated breach years ago.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator pulls up the shopping website's old breach report.",
                        "\"This is exactly it.\""
                      ],
                      explanation: [
                        "\"That old shopping account was breached some time ago, and your email and password were part of the data that was stolen.\"",
                        "\"Because you used that same password for your email account too, the old leak became a working key to your inbox.\""
                      ]
                    },
                    {
                      text: "Your email provider's own systems were broken into.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the provider's security status for that week.",
                        "\"Good instinct to check, but that's not what we're seeing.\""
                      ],
                      explanation: [
                        "\"There's no record of any breach on your email provider's own systems.\"",
                        "\"This was specific to your account, not a wider problem with the provider.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - How It Reached the Pension Office",
                  evidence: [
                    "The pension account login occurred eleven minutes after the email login",
                    "The pension office's welcome email was still sitting in your inbox",
                    "The same password unlocked the pension account on the first try"
                  ],
                  question: "You never told anyone your pension account details. How did they find and access it so quickly?",
                  options: [
                    {
                      text: "They searched your inbox, found the pension office's email, and tried the same password there.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator highlights the eleven-minute gap between the two logins.",
                        "\"Exactly right.\""
                      ],
                      explanation: [
                        "\"Once someone is inside an email account, they can see everything that's come through it - including a welcome email that names the exact website and account.\"",
                        "\"From there, trying the same password takes seconds, since it's the same password you'd already shown works.\""
                      ]
                    },
                    {
                      text: "The pension office and your email provider share information.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head gently.",
                        "\"They're completely separate organizations, with no shared access at all.\""
                      ],
                      explanation: [
                        "\"There's no official connection between a government pension service and a private email provider.\"",
                        "\"The only real connection here was the password you happened to use for both.\""
                      ]
                    },
                    {
                      text: "The pension website itself has weak security.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator reviews the pension office's security standards.",
                        "\"Their standards are actually quite strong.\""
                      ],
                      explanation: [
                        "\"The pension website required a reasonably strong password, and that's what you gave it.\"",
                        "\"The issue wasn't the website's security. It's that the exact same password already existed somewhere else, already exposed.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - Reaching Your Friends and Family",
                  evidence: [
                    "Several messages asking for gift cards were sent from your email to people in your contacts list",
                    "The messages were sent within an hour of the first email login",
                    "None of the recipients received any request through any other method"
                  ],
                  question: "Why would someone use your email to message your friends and family instead of just taking money directly?",
                  options: [
                    {
                      text: "It was a mistake - the messages weren't actually meant to be sent.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator points to the pattern of the messages.",
                        "\"This wasn't accidental. It's a very deliberate, very common approach.\""
                      ],
                      explanation: [
                        "\"These messages follow a well-known pattern used specifically because it works.\"",
                        "\"They're written to feel urgent and personal, which makes people less likely to stop and question them.\""
                      ]
                    },
                    {
                      text: "A message from someone's real email address is far more convincing than a call from a stranger.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods slowly.",
                        "\"That's exactly the reasoning behind it.\""
                      ],
                      explanation: [
                        "\"A message that comes from your actual, familiar email address bypasses a lot of natural suspicion - it looks and feels like it's really from you.\"",
                        "\"This is one of the reasons a compromised email account is dangerous to more than just its owner. It can be used to reach and deceive the people who trust that owner most.\""
                      ]
                    },
                    {
                      text: "They wanted to warn your contacts about the situation.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator reads out the actual message content.",
                        "\"I'm afraid that's not what these messages say at all.\""
                      ],
                      explanation: [
                        "\"The messages ask urgently for gift cards, with no mention of any account being compromised.\"",
                        "\"This was an attempt to take advantage of the trust your contacts have in you, not a warning.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lays three incident reports side by side on the screen - your email, your pension account, and your bank - along with the timeline of messages sent to your contacts.",
                "\"On their own, these can look like four separate problems,\" they explain.",
                "\"Let's line up exactly when each one happened.\""
              ],
              timeline: [
                {
                  time: "Some years earlier",
                  story: [
                    "You create an account on a shopping website, using the same password you use almost everywhere.",
                    "You use the site once or twice, then largely forget about it."
                  ]
                },
                {
                  time: "The original breach",
                  story: [
                    "The shopping website suffers a data breach. Your email and password are among the stolen data.",
                    "It's mentioned briefly in the news. You don't connect it to yourself at the time."
                  ]
                },
                {
                  time: "Two months later",
                  story: [
                    "The stolen data is sold on and eventually tested automatically against email providers, banks, and government services, including yours."
                  ]
                },
                {
                  time: "11:20 PM",
                  story: [
                    "Your email account is tested and logged into successfully."
                  ]
                },
                {
                  time: "11:31 PM",
                  story: [
                    "Your pension account's welcome email is found in your inbox.",
                    "The same password is tried there. It works."
                  ]
                },
                {
                  time: "Shortly after",
                  story: [
                    "Messages asking for gift cards are sent to people in your contacts list from your own email address.",
                    "Separately, the same password is tried against your online banking, using an old confirmation email as a guide. It also works."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "One password, reused across your email, your pension account, and your bank, turned an old and half-forgotten breach into a crisis that reached your finances, your government benefits, and the people closest to you - all within about an hour.",
                    "None of it required breaking into anything. It only required one password that already worked everywhere."
                  ]
                }
              ],
              lesson: [
                "The investigator turns to face you and your adult child directly.",
                "\"I want to leave you with the most important thing from all of this.\"",
                "\"Your email account isn't just one account among many - it's the key that can open almost everything else you use.\"",
                "\"When one password protects your email and your bank and your pension account, one old breach anywhere can reach all three at once - and even the people who trust you.\"",
                "\"Using a different password for each important account, and writing them down somewhere safe rather than trying to remember them all, would have stopped this at the very first step.\"",
                "\"So would turning on extra verification steps where they're offered - even a correct password wouldn't have been enough on its own.\"",
                "\"None of this happened because you did anything foolish. It happened because a habit that feels perfectly reasonable - using one password you can actually remember - quietly carries more risk than it seems to.\""
              ]
            }
          }
        ]
      },
      {
        text: "Set up a new, different password just for this account.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You read the note under the password field again: \"For your security, please use a different password than ones you've used elsewhere.\"",
              "You're not entirely sure why it matters, but you decide to trust it, just this once.",
              "You call your adult child, who helps you come up with a new password over the phone - something memorable to you, but different from anything you've used before.",
              "You write it down carefully in the small notebook you keep by the phone, alongside your other important numbers.",
              "It takes a few extra minutes, but you finish, and the screen shows a green tick.",
              "\"Account created successfully.\""
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "Checking the pension website becomes part of your routine, just as your adult child said it would.",
              "Once a fortnight or so, you log in, look up the new password in your notebook if you need to, and check that everything looks right.",
              "It's a small extra step, but it becomes second nature quickly enough.",
              "You still use your familiar password for most other things, but this one account has something different, and only you and your adult child know it."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "One month later",
                story: [
                  "Your adult child mentions a news story over dinner - a shopping website being hacked, millions of accounts affected.",
                  "\"Isn't that the one you use?\" they ask.",
                  "You think about it. You do have an account there, though barely used.",
                  "\"I do,\" you say, \"but that's not the password I used for the pension thing, at least.\"",
                  "They look pleasantly surprised. \"Good thinking.\""
                ]
              },
              {
                time: "Two months later",
                story: [
                  "The shopping website's breach quietly resurfaces, exactly as your adult child mentioned.",
                  "The stolen information - your email address and your old, familiar password - is bundled up and sold on to people you'll never meet.",
                  "Nothing about your day changes."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "Late one evening, automated systems begin working through the stolen list, testing thousands of email addresses against banks, email providers, and government services.",
              "Your email is tried first. The old password matches - you never did get around to changing that one.",
              "Whoever is on the other end searches your inbox and finds the pension office's welcome email.",
              "They try the same old password there.",
              "It fails.",
              "They try again, slightly differently. It fails again.",
              "There's no trail to follow, no clue in the message itself as to what the new password might be - only your notebook by the phone knows that, and it isn't connected to anything online.",
              "After a few attempts, the automated system gives up and moves on to the next name on its list."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "A few days later, you go to check your email and find your password doesn't work.",
              "You call your adult child, a little worried, and they help you reset it that evening - a bit of a hassle, but nothing more.",
              "While you have them on the phone, you mention it, and they check your pension account together with you, just to be safe.",
              "Everything looks exactly as it should. Your payments are on schedule. Nothing has been changed.",
              "A week later, an email arrives from the pension office: \"We blocked a suspicious login attempt on your account and wanted to let you know.\"",
              "You read it with your adult child over the phone, both a little relieved.",
              "\"That different password,\" they say, \"that's probably exactly why it didn't work.\""
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "Curious after that email, your adult child helps you request a callback from the pension office to understand exactly what happened.",
                "A digital forensics investigator joins the call, sharing a short report on their screen.",
                "\"Good news first - nothing was taken, and nothing needs to be undone,\" the investigator says.",
                "\"Let's still walk through why, because it's worth understanding.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Attempted Break-In",
                  evidence: [
                    "A login attempt occurred using a password linked to an old shopping website breach",
                    "The password did not match your pension account",
                    "The attempt was automatically blocked after two failed tries"
                  ],
                  question: "The attacker had a password you'd genuinely used before. Why didn't it open this account?",
                  options: [
                    {
                      text: "The pension website's system randomly blocked the attempt.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the system logs.",
                        "\"Nothing random about it at all.\""
                      ],
                      explanation: [
                        "\"The system blocked the attempt because the password given simply didn't match what was on file.\"",
                        "\"A login either matches the stored password or it doesn't - there's no element of chance involved.\""
                      ]
                    },
                    {
                      text: "That password belonged to a different account and was never used here.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator pulls up your account creation record.",
                        "\"That's exactly right.\""
                      ],
                      explanation: [
                        "\"The password from the old shopping website breach was never the one protecting your pension account.\"",
                        "\"Because you and your adult child set up a different password just for this account, the leaked one simply had nothing to unlock.\""
                      ]
                    },
                    {
                      text: "The pension website has a much stronger firewall than most websites.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator smiles slightly.",
                        "\"A firewall wouldn't really come into it here.\""
                      ],
                      explanation: [
                        "\"This wasn't an attack on the website's technical defenses - it was simply someone trying a specific password.\"",
                        "\"What stopped it was that the password itself was wrong, nothing more technical than that.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Map That Led Nowhere",
                  evidence: [
                    "The same leaked password was tried successfully against your email account first",
                    "That gave access to your inbox, including the pension office's welcome email",
                    "The attempt still failed at the pension account itself"
                  ],
                  question: "They got into your email and found exactly where your pension account was. Why did the trail stop there?",
                  options: [
                    {
                      text: "They didn't actually get into your email either.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator points to the email login record.",
                        "\"They did, unfortunately. It's right here in the logs.\""
                      ],
                      explanation: [
                        "\"Your email password hadn't been changed at the time, so that part of the attempt did succeed.\"",
                        "\"The good news is that it stopped at the very next step, rather than spreading any further.\""
                      ]
                    },
                    {
                      text: "The pension account had a completely different password, so knowing about the account wasn't enough on its own.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods.",
                        "\"Exactly that.\""
                      ],
                      explanation: [
                        "\"Finding your account is only half the job for an attacker. They still need the correct password for that specific account.\"",
                        "\"Because it was different from your email password, knowing where to look didn't actually help them get in.\""
                      ]
                    },
                    {
                      text: "The pension office called you to confirm before allowing the login.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks your call history with the office.",
                        "\"There's no record of any call around that time.\""
                      ],
                      explanation: [
                        "\"No phone verification was involved in blocking this attempt.\"",
                        "\"It came down entirely to the password itself not matching.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - What Actually Stopped It",
                  evidence: [
                    "The password used for the pension account was different from every other account you use",
                    "It had never appeared in any known data leak",
                    "No messages were sent to your contacts, and no further logins were attempted after the pension account failed"
                  ],
                  question: "Looking at the whole picture, what was the one decision that made the real difference here?",
                  options: [
                    {
                      text: "Choosing a different password for the pension account, separate from your usual one.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator closes the report with a small nod.",
                        "\"That's the whole story, really.\""
                      ],
                      explanation: [
                        "\"That one decision is the entire reason this stayed a blocked login instead of becoming a much bigger problem.\"",
                        "\"It's a small extra step that made a very large difference.\""
                      ]
                    },
                    {
                      text: "Simply being lucky that nobody targeted you specifically.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator gestures at how many attempts the pension office blocks in an average week.",
                        "\"Luck really isn't the right word here.\""
                      ],
                      explanation: [
                        "\"Attempts like this happen constantly, across thousands of accounts, yours included.\"",
                        "\"You were tried, just like everyone else on that list. It simply didn't work.\""
                      ]
                    },
                    {
                      text: "The pension office noticing something suspicious about you personally.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the flagging criteria used.",
                        "\"Nothing about you personally was involved in this.\""
                      ],
                      explanation: [
                        "\"The system simply logs any failed login attempt automatically, for every account.\"",
                        "\"It wasn't about you being noticed - it was about the password not matching, plain and simple.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lays out the same picture as any other case - email, pension account, and the messages that, in other cases, sometimes reach a person's contacts.",
                "\"This time, the line stops after a single step,\" they explain.",
                "\"Let's walk through exactly where.\""
              ],
              timeline: [
                {
                  time: "Some years earlier",
                  story: [
                    "You create an account on a shopping website, using the password you used to use for nearly everything.",
                    "You use the site once or twice, then largely forget about it."
                  ]
                },
                {
                  time: "The original breach",
                  story: [
                    "The shopping website suffers a data breach. Your email and old password are among the stolen data.",
                    "It's mentioned briefly in the news. You don't connect it to yourself at the time."
                  ]
                },
                {
                  time: "In between",
                  story: [
                    "When setting up your pension account, you and your adult child chose a different password just for that one account, written down safely in your notebook.",
                    "It wasn't in response to anything in particular - it just seemed sensible at the time."
                  ]
                },
                {
                  time: "Two months later",
                  story: [
                    "The stolen data is sold on and tested automatically against email providers, banks, and government services, yours included."
                  ]
                },
                {
                  time: "The attempt",
                  story: [
                    "Your email login succeeds, since that password hadn't been changed.",
                    "The pension office's welcome email is found and read.",
                    "The same old password is tried on your pension account. It fails, twice, then the attempt stops."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "The breach reached your inbox. It never reached your pension account, your finances, or the people you care about.",
                    "One different password was the entire difference between a serious, weeks-long ordeal and a single blocked attempt you almost didn't hear about."
                  ]
                }
              ],
              lesson: [
                "The investigator closes their laptop and looks between you and your adult child.",
                "\"I know this can feel like a lot of extra effort for something that might never happen.\"",
                "\"But this is exactly what it's supposed to look like when it works - quiet, unremarkable, nothing to clean up afterward.\"",
                "\"Your email account is still worth protecting especially carefully, since it's the key to almost everything else.\"",
                "\"Writing different passwords down safely, the way you did, is a perfectly good way to manage this if a password manager feels unfamiliar.\"",
                "\"And where it's offered, an extra verification step - a code sent to your phone, for instance - adds one more layer that's well worth having.\"",
                "\"You'll likely never know how many attempts like this get quietly stopped over the years. That's really the whole point of doing this.\""
              ]
            }
          }
        ]
      }
    ]
  }
};

window.scenarios = window.scenarios || [];
window.scenarios.push(olderAdultPasswordCase);
