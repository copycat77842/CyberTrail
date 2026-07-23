const olderAdultPasswordCase = {
  id: "password_olderadult",
  meta: {
    title: "Password Breach",
    description: "Can you choose a secure password and stop one data breach from spreading to your important accounts and the people who trust you?",
    difficulty: "Easy",
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
    "The website looks official enough: the same crest from the letter, the same formal blue and white.",
    "You type in your name, your date of birth, your reference number from the letter.",
    "It's slower going than you'd like, but you get through it.",
    "Then a field appears: Create a password for your account.",
    "You think for a moment.",
    "You have a password you've used for years, which you use for several websites you visit regularly.",
    "It's easy to remember, which matters more to you than anything else right now.",
    "A note beneath the field suggests using a different password than ones you've used elsewhere.",
    "You're not entirely sure why that would matter. It's a strong password. Nobody could guess it.",
    "After all, if nobody can guess it, how could someone possibly get it?",
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
              "You type in the password you always use, the same one you've used for several accounts over the years.",
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
              "You use the same email and the same password for nearly everything you do online. It's simply easier to keep track of that way."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "One month later",
                story: [
                  "Your adult child mentions something over dinner: a news story about a shopping website being hacked, millions of accounts affected.",
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
                  "The stolen information, including your email address and that familiar password, ends up for sale on a website you'll never see, to people you'll never meet.",
                  "Nothing about your day changes. You have no way of knowing any of this has happened."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "Late one evening, automated systems on the other side of the world begin working through a stolen database from an old shopping website breach.",
              "Thousands of email addresses and passwords are tested automatically against popular services.",
              "The attackers are not looking for you specifically.",
              "They are simply checking whether old stolen passwords still work somewhere else.",
              "Your email address is tested first.",
              "The old password works.",
              "Once inside your email, the attacker begins looking through your messages.",
              "They find the welcome email from the pension office and learn that you created an account there.",
              "They try the same password.",
              "It works again.",
              "Later, while searching through your inbox, they find an old banking notification confirming that you use online banking.",
              "The same password is tested there too.",
              "It works again.",
              "Three important accounts.",
              "One password.",
              "One forgotten breach from years ago."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You notice something is wrong three days later when you receive a message from the pension office asking you to confirm recent changes to your account.",
              "You stop and read it carefully.",
              "You do not remember making any changes.",
              "A little worried, you try to log in and check what happened.",
              "Your password no longer works.",
              "You try again, but the result is the same.",
              "You call your adult child, who helps you contact the pension office immediately.",
              "The support team explains that someone accessed your account and attempted to change important details.",
              "They had tried to update the payment information linked to your pension.",
              "Thankfully, the suspicious change was detected before any money was sent to the wrong place.",
              "While helping you secure your account, your adult child notices something else unusual.",
              "Several messages have been sent from your email account that you do not remember writing.",
              "They were sent to close friends and family asking for gift cards because of an 'urgent situation'.",
              "Your stomach drops when you realise those messages came from your own email address.",
              "One of your friends had almost sent money before they called to check if the message was real.",
              "The attacker was not only trying to access your pension account.",
              "They were using the trust people had in you to target the people around you as well.",
              "Over the next few weeks, you work with the pension office, your email provider, and your bank to secure your accounts.",
              "You change every important password and make sure no account is relying on the same password anymore.",
              "It takes time and effort, but you are relieved that the pension payments were protected and the damage was stopped."
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
                        "\"Once someone is inside an email account, they can see everything that's come through it, including a welcome email that names the exact website and account.\"",
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
                    "Suspicious banking activity appeared shortly after the email account was accessed",
                    "Messages were sent from your email account to your contacts",
                    "The attacker successfully accessed multiple accounts using the same password"
                  ],
                  question: "Why would someone use your email to message your friends and family instead of just taking money directly?",
                  options: [
                    {
                      text: "It was a mistake, and the messages weren't actually meant to be sent.",
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
                        "\"A message that comes from your actual, familiar email address bypasses a lot of natural suspicion. It looks and feels like it's really from you.\"",
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
                "The investigator lays three incident reports side by side on the screen: your email, your pension account, and your bank, along with the timeline of messages sent to your contacts.",
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
                  time: "Tuesday, 10:30 AM - Pension account created",
                  story: [
                    "After receiving a letter from the pension office, you create your online pension account.",
                    "You choose the same password you have used for several other websites because it is familiar and easy to remember.",
                    "The account is successfully created and becomes part of your regular routine."
                  ]
                },
                {
                  time: "Three months later - The original breach",
                  story: [
                    "The shopping website suffers a data breach. Your email and password are among the stolen data.",
                    "It's mentioned briefly in the news. You don't connect it to yourself at the time."
                  ]
                },
                {
                  time: "Two weeks later - Monday, 11:09 PM",
                  story: [
                    "The stolen data is obtained by criminals who specialise in testing leaked credentials.",
                    "Automated systems begin checking whether the stolen passwords work on other websites."
                  ]
                },
                {
                  time: "Monday, 11:20 PM",
                  story: [
                    "Your email account is tested using the leaked password.",
                    "The login succeeds on the first attempt.",
                    "The attacker gains access to your inbox without needing to contact you."
                  ]
                },
                {
                  time: "Monday, 11:31 PM",
                  story: [
                    "The attacker searches through your emails and finds the welcome message from the pension office.",
                    "The same password is tested against your pension account.",
                    "The login succeeds."
                  ]
                },
                {
                  time: "Monday, 11:38 PM",
                  story: [
                    "The attacker begins looking for ways to benefit from the accounts they now control.",
                    "They attempt to change the payment details connected to your pension account.",
                    "They also send messages from your email account asking contacts for gift cards because of an urgent situation."
                  ]
                },
                {
                  time: "Tuesday, 8:45 AM",
                  story: [
                    "A friend receives the message from your email account and becomes suspicious.",
                    "They contact you directly before purchasing any gift cards.",
                    "The attempted scam begins to unravel."
                  ]
                },
                {
                  time: "Tuesday, 9:10 AM",
                  story: [
                    "The pension office detects unusual account activity and contacts you about the attempted changes.",
                    "You discover that someone accessed your account and begin the recovery process with your adult child."
                  ]
                },
              ],
              finalWords: [
                "The investigator closes the report and looks between you and your adult child.",
                "\"This case is a good example of why password reuse is so dangerous.\"",
                "\"The attackers did not break into your pension account or your bank account.\"",
                "\"They simply found a password that was already exposed and tried it somewhere else.\"",
                "\"Because that same password protected your email, your pension account, and your banking account, one small breach became a much bigger problem.\"",
                "\"Your email account deserves special protection because it is often the key to recovering everything else.\"",
                "\"Using a different password for each important account means that if one password is stolen, the damage can stop there.\"",
                "\"Security is not about making attacks impossible.\"",
                "\"It is about making sure one mistake does not put your entire digital life at risk.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator leaves you and your adult child with a few habits that would have made this attack much harder to carry out.",
                  "\"Security doesn't have to be complicated,\" they explain. \"It's usually a handful of small habits that make the biggest difference.\""
                ],
                advice: [
                  {
                    title: "Use a different password for every important account",
                    text: "Your email, banking, government services, and pension account should each have their own unique password. If one account is ever breached, attackers won't automatically gain access to the others."
                  },
                  {
                    title: "Protect your email more than anything else",
                    text: "Your email is often the key to resetting passwords for your other accounts. Treat it as one of your most valuable online accounts and give it its own strong, unique password."
                  },
                  {
                    title: "Consider using a password manager",
                    text: "Password managers create and remember long, unique passwords for every website, so you only need to remember one master password. They remove the temptation to reuse passwords."
                  },
                  {
                    title: "Turn on two-factor authentication (2FA)",
                    text: "Whenever it's available, enable two-factor authentication. Even if someone learns your password, they'll still need the second verification step before they can access your account."
                  },
                  {
                    title: "Act quickly if you hear about a data breach",
                    text: "If a company announces that your account may have been involved in a breach, change that password immediately. If you've reused it anywhere else, change those passwords too."
                  }
                ]
              },
              lesson: [
                  "Reusing passwords allows attackers to move from one account to another.",
                  "Protect your email, banking, and important services with unique passwords."
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
              "You call your adult child, who helps you come up with a new password over the phone, something memorable to you, but different from anything you've used before.",
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
                  "Your adult child mentions a news story over dinner: a shopping website being hacked, millions of accounts affected.",
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
                  "The stolen information, your email address and your old, familiar password, is bundled up and sold on to people you'll never meet.",
                  "Nothing about your day changes."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "Late one evening, automated systems begin working through a stolen database from an old shopping website breach.",
              "Thousands of email addresses and passwords are tested automatically against popular services.",
              "The attackers are not looking for you specifically.",
              "They are simply checking whether old stolen passwords still work somewhere else.",
              "Your email address is tested.",
              "The old password works.",
              "Once inside your email, the attacker begins looking through your messages.",
              "They find the welcome email from the pension office and discover that you have an account there.",
              "They try the same password.",
              "It fails.",
              "They try your online banking as well, using information found in your inbox.",
              "That fails too.",
              "The attacker has found the accounts, but knowing where the doors are does not help when the keys are different.",
              "After a few attempts, the automated system moves on to the next name on the list.",
              "Your email account was exposed, but the damage stops there."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "A few days later, you receive a security alert from your email provider.",
              "It says that your account was accessed from an unfamiliar device.",
              "Your heart sinks as you realise someone else may have been inside your email.",
              "You call your adult child, who helps you secure the account and change your password.",
              "Together, you check your important accounts: the pension website, your bank, and other services connected to your email.",
              "The pension account is unchanged.",
              "Your payments are still safe.",
              "Your banking account has no suspicious transactions.",
              "You notice that the attacker had found your pension and banking information, but they could not get any further because those accounts had different passwords.",
              "There are no messages sent to your friends asking for gift cards.",
              "Nobody you care about was targeted using your identity.",
              "It is stressful, and you spend time securing your accounts, but the situation is contained.",
              "A single decision made while creating that pension account prevented what could have become a much bigger problem."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "Curious after that email, your adult child helps you request a callback from the pension office to understand exactly what happened.",
                "A digital forensics investigator joins the call, sharing a short report on their screen.",
                "\"Good news first: nothing was taken, and nothing needs to be undone,\" the investigator says.",
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
                      text: "The pension website's system randomly blocked the attempt.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the system logs.",
                        "\"Nothing random about it at all.\""
                      ],
                      explanation: [
                        "\"The system blocked the attempt because the password given simply didn't match what was on file.\"",
                        "\"A login either matches the stored password or it doesn't. There's no element of chance involved.\""
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
                        "\"This wasn't an attack on the website's technical defenses. It was simply someone trying a specific password.\"",
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
                      text: "The attacker ran out of time before getting to your pension account.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the timestamps.",
                        "\"Actually, the pension login was attempted just eleven minutes later.\""
                      ],
                      explanation: [
                        "\"There was no meaningful delay. The attacker moved quickly, straight from your email to the pension website.\"",
                        "\"The attempt failed for a different reason entirely: the password itself didn't match.\""
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
                        "\"It wasn't about you being noticed. It was about the password not matching, plain and simple.\""
                      ]
                    },
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
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator places three reports on the screen: your email account, your pension account, and your bank.",
                "\"This case is interesting because the attacker did get through one door,\" they explain.",
                "\"The important part is what happened after that.\"",
                "\"Let's look at where the attack stopped.\""
              ],
              timeline: [
                {
                  time: "Several years earlier - Old shopping account created",
                  story: [
                    "You create an account on a shopping website and use a password you later reuse on many other services.",
                    "Over time, that account becomes something you rarely think about."
                  ]
                },
                {
                  time: "Several months earlier - Tuesday, 10:30 AM",
                  story: [
                    "You create your online pension account using the official letter provided by the pension office.",
                    "With help from your adult child, you choose a new password that has never been used on another website.",
                    "The password is written down safely so you can access it when needed."
                  ]
                },
                {
                  time: "A few weeks later - Tuesday, 9:15 AM",
                  story: [
                    "The shopping website suffers a data breach.",
                    "Attackers steal customer information, including your email address and the old password used on that website.",
                    "Your pension account password is not included because it was different."
                  ]
                },
                {
                  time: "Two months later - Monday, 11:00 PM",
                  story: [
                    "Cybercriminals obtain the stolen database and begin testing the leaked credentials against other websites.",
                    "They are looking for accounts where people reused the same password."
                  ]
                },
                {
                  time: "Monday, 11:20 PM - Email account accessed",
                  story: [
                    "Your old password successfully unlocks your email account.",
                    "The attacker searches through your inbox and finds the pension office's welcome email."
                  ]
                },
                {
                  time: "Monday, 11:31 PM - Pension account attempt",
                  story: [
                    "The attacker tries the same leaked password on your pension account.",
                    "The login fails because the pension account uses a different password."
                  ]
                },
                {
                  time: "Monday, 11:33 PM - Attack stops",
                  story: [
                    "The attacker cannot access your pension account.",
                    "They cannot change your payment details.",
                    "They cannot use your pension account to target your finances."
                  ]
                },
              ],
              finalWords: [
                "The investigator closes their laptop and looks between you and your adult child.",
                "\"This case is a good example of how security habits protect you before you even know you need them.\"",
                "\"The attacker did manage to access one account, but they could not use it to reach everything else.\"",
                "\"The reason was simple: your important accounts did not all depend on the same password.\"",
                "\"Good security is not about stopping every attempt.\"",
                "\"It is about making sure an attacker has as few opportunities as possible when something goes wrong.\""
              ],
              investigatorAdvice: {
                intro: [
                  "Before ending the investigation, the investigator gives you a few ways to make your everyday online life even more secure.",
                  "\"You already made one of the most important choices by using a different password.\"",
                  "\"Here are some other habits that can make your protection even stronger.\""
                ],
                advice: [
                  {
                    title: "Keep using unique passwords for important accounts",
                    text: "A different password for each account prevents one stolen password from becoming a key to everything else."
                  },
                  {
                    title: "Enable two-factor authentication",
                    text: "Two-factor authentication adds another layer of protection. Even if someone discovers your password, they still need an additional verification step to access your account."
                  },
                  {
                    title: "Store passwords safely",
                    text: "Writing passwords down can be helpful if done carefully, but a password manager is often a safer option because it can securely store and generate passwords for you."
                  },
                  {
                    title: "Review your most important accounts regularly",
                    text: "Check your email, banking, and other important services occasionally to make sure recovery details and security settings are still correct."
                  },
                  {
                    title: "Think carefully before trusting unexpected messages",
                    text: "Scammers often create urgency to make people act quickly. Take time to verify unusual requests, especially ones involving money or personal information."
                  }
                ]
              },

              lesson: [
                "One strong security choice can stop a small problem from becoming a crisis.",
                "Unique passwords, two-factor authentication, and careful habits create stronger protection online."
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
