const studentPasswordCase = {
  id: "password_student",
  meta: {
    title: "Password Breach",
    description: "Can you choose a secure password and stop a single data breach from spreading to your gaming account and the rest of your online life?",
    difficulty: "Easy",
    ageGroup: "student"
  },
  intro: [
    "It's finally Friday afternoon.",
    "The last school bell echoes through the hallways as students rush out through the gates.",
    "The weekend has officially begun.",
    "Before you even reach the bus stop, your phone starts buzzing with messages from the group chat.",
    "\"Hurry up!\"",
    "\"Everyone is already playing!\"",
    "\"Download it already!\"",
    "A brand new online game has released today, and almost everyone in your friend group is talking about it.",
    "You have been waiting all week to play.",
    "You can already imagine joining your friends, exploring the game world, and competing together."
  ],
  setup: [
    "The moment you arrive home, your school bag drops onto the floor.",
    "You don't even unpack it.",
    "Instead, you rush to your room, turn on your laptop, and start downloading the game.",
    "The progress bar slowly moves across the screen.",
    "20%...",
    "50%...",
    "90%...",
    "Installation Complete.",
    "You smile and click Create Account.",
    "Username entered.",
    "Email entered.",
    "Everything is ready.",
    "Except for one final step.",
    "Create Password.",
    "You pause.",
    "Somewhere at the back of your mind, you remember something you heard before at a school cybersecurity event.",
    "\"Use strong passwords.\"",
    "\"Don't reuse the same password everywhere.\"",
    "For a moment, you consider creating a completely new password.",
    "But your friends are already waiting.",
    "And besides...",
    "Your current password is already long.",
    "It has numbers.",
    "It has symbols.",
    "It looks secure.",
    "It's never caused a problem before."
  ],
  choice: {
    text: "What password do you choose?",
    options: [
      {
        text: "Keep using your usual password.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You decide to use the password you've reused on a handful of other accounts over the years - most of which you barely think about anymore.",
              "It is long, complicated, and difficult for someone to guess.",
              "A small warning appears in the back of your mind.",
              "\"What if something bad actually happens?\"",
              "You have used this password for years.",
              "Nothing bad has happened before.",
              "The excitement of finally joining your friends is stronger than the warning.",
              "You type the password and click Create Account."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "Within seconds, you are inside the game.",
              "Your friends welcome you immediately.",
              "The evening disappears as you explore the game together.",
              "You complete missions.",
              "You unlock new items.",
              "You laugh with your friends over a few close calls in the game.",
              "The account becomes part of your daily routine.",
              "School.",
              "Homework.",
              "Gaming.",
              "Repeat.",
              "Eventually, you stop thinking about your password completely."
            ]
          },
          {
            type: "timeline", // timeline
            events: [
              {
                time: "One week later",
                story: [
                  "One night, while scrolling through articles after dinner, a headline catches your attention.",
                  "\"Millions of passwords leaked after a major cyber attack.\"",
                  "You stop scrolling for a moment.",
                  "For a second, you remember the warning you saw when creating your account.",
                  "You think about changing your password.",
                  "It would only take a few minutes.",
                  "But nothing has happened to you before.",
                  "The article feels distant.",
                  "Even if it was real, it probably happens very rarely.",
                  "You decide to deal with it later.",
                  "You keep scrolling."
                ]
              },
              {
                time: "Three months later",
                story: [
                  "A small website you signed up for years ago quietly suffers a data breach.",
                  "It is not a famous company.",
                  "It does not appear on the news.",
                  "Almost nobody notices.",
                  "You do not even remember creating an account there.",
                  "But inside the stolen database are thousands of usernames and passwords.",
                  "Including yours.",
                  "The attackers now have something valuable.",
                  "Not just one account.",
                  "A password that might work somewhere else."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "Over the next few months, the game simply becomes part of your routine.",
              "Most afternoons follow the same pattern.",
              "Nothing ever seems unusual.",
              "One Friday evening, after several hours of playing together, everyone begins logging off for the night.",
              "\"See you tomorrow!\" one of your friends says before disconnecting.",
              "You smile, close the game and shut down your computer.",
              "Within minutes, you're asleep.",
              "Your room is silent.",
              "Your computer is switched off.",
              "Everything feels completely normal.",
              "Yet somewhere on the other side of the world, in a dimly lit room illuminated only by rows of glowing monitors, automated programs continue running through the night.",
              "They don't know your name.",
              "They don't care who you are.",
              "One by one, they test millions of stolen usernames and passwords against websites across the internet, searching for accounts that still trust credentials leaked long ago.",
              "Most of these automated login attempts will fail.",
              "But every now and then, one succeeds.",
              "Only because of one reused password.",
              "One forgotten account.",
              "One seemingly small mistake."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "The following afternoon, you log back in.",
              "Almost immediately, something feels wrong.",
              "Several rare items you've spent months collecting have disappeared.",
              "Your in-game currency is much lower than you remember leaving it.",
              "At first, you wonder if you're simply remembering things incorrectly.",
              "Then your phone starts vibrating.",
              "Messages arrive from your friends.",
              "\"Did you really send me this link?\"",
              "\"Why are you giving away free game currency?\"",
              "\"Your account keeps messaging everyone.\"",
              "You stare at the messages in confusion.",
              "You never sent any of them.",
              "You quickly open your account settings to change your password.",
              "That's when you notice the recovery email listed on the account isn't yours anymore.",
              "Your stomach drops.",
              "You try logging into your own email to fix it.",
              "Incorrect password.",
              "You try again, more carefully this time.",
              "Incorrect password.",
              "The same reused password that let someone into your gaming account had let them into your email too.",
              "And your email is the key to almost everything else - the thing every other account uses to reset a forgotten password.",
              "A feeling of panic starts to build.",
              "Someone else now controls more than just a game.",
              "After several stressful calls with support teams and answering security questions to prove who you are, you eventually recover both accounts over the next few days.",
              "The first thing you do afterward is go through every account you can still remember and give each one its own, different password.",
              "It takes over an hour.",
              "You keep thinking you should have done this three months ago."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A few days after recovering both accounts, you still can't stop thinking about what happened.",
                "You remember going to sleep that night with everything feeling completely normal.",
                "Then the next day, both your game and your email were gone.",
                "You want to know one thing:",
                "\"How did someone get inside?\"",
                "The game's support team connects you with a digital forensics investigator who specialises in analysing cyber attacks.",
                "During the meeting, the investigator opens a digital case file containing login records, security reports, and leaked data samples.",
                "\"The good news is that your computer was not hacked,\" the investigator explains.",
                "\"The attacker didn't break through your security.\"",
                "\"They found a different way in.\"",
                "\"And that big breach you saw in the news a few months ago? That wasn't even the one that hit you.\"",
                "\"It was something much smaller and much older.\"",
                "\"Let's examine the evidence and reconstruct exactly what happened.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Impossible Login",
                  evidence: [
                    "A successful login occurred while you were asleep",
                    "The correct email address was used",
                    "The correct password was entered on the first attempt",
                    "The login came from an unfamiliar location",
                    "The game's own servers show no signs of being broken into"
                  ],
                  question: "The attacker entered the correct password immediately. What does this suggest?",
                  options: [
                    {
                      text: "The attacker guessed your password.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator looks at the login history.",
                        "\"If someone was guessing, we would normally see many failed attempts first.\""
                      ],
                      explanation: [
                        "\"Besides, your password was not something that could easily be guessed.\"",
                        "\"The evidence suggests the attacker already had the correct password before attempting to log in.\""
                      ]
                    },
                    {
                      text: "The attacker already knew your password.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator highlights the first successful login.",
                        "\"Exactly. The attacker didn't need to break the lock.\"",
                        "\"They already had the key.\""
                      ],
                      explanation: [
                        "\"The login succeeded immediately because the attacker was using valid credentials.\"",
                        "\"The attacker likely already knew your password from a data breach on a website where you had used the same password.\""
                      ]
                    },
                    {
                      text: "The attacker hacked directly into the game's servers.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the game's security report.",
                        "\"Let's see if there is any evidence of a server breach.\""
                      ],
                      explanation: [
                        "\"There are no signs that the game's servers were compromised.\"",
                        "\"If attackers had broken into the servers, they would not need your personal password.\"",
                        "\"This appears to be an account-level attack, not a server attack.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Password Analysis",
                  evidence: [
                    "Password length: Strong",
                    "Password complexity: High",
                    "Password was used on multiple websites"
                  ],
                  question: "The investigator discovers your password was actually strong. So what was the weakness?",
                  options: [
                    {
                      text: "The password was cracked using a brute-force attack.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the login attempt count.",
                        "\"Brute-forcing usually leaves a trail behind.\""
                      ],
                      explanation: [
                        "\"There's only one login attempt on record, and it succeeded immediately.\"",
                        "\"A brute-force attack against a password this strong would take far too long, and would show up as hundreds or thousands of failed attempts first. There's no trace of that here.\""
                      ]
                    },
                    {
                      text: "The same password was protecting multiple accounts.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator circles several accounts on the screen.",
                        "\"This is where everything connects.\""
                      ],
                      explanation: [
                        "\"A strong password is only useful if it stays private.\"",
                        "\"By using the same password across different websites, one breach could expose every account using that password.\"",
                        "\"The attacker didn't defeat your password. They found another place where it had already been exposed.\""
                      ]
                    },
                    {
                      text: "The password became weaker because it was old.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator smiles slightly.",
                        "\"Passwords don't expire just because they have existed for a long time.\""
                      ],
                      explanation: [
                        "\"An old password can still be secure if nobody else knows it.\"",
                        "\"The danger comes when attackers discover it and can reuse it elsewhere.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - Confirming the Source",
                  evidence: [
                    "Three different old accounts turn up in various leaked databases tied to your email",
                    "Only one of those leaks contains a password that matches your gaming account's old password exactly",
                    "That leak's breach date lines up with when the credential-stuffing attempts against you began"
                  ],
                  question: "You've reused passwords in more than one old account. How does the investigator pin down which breach actually caused this attack?",
                  options: [
                    {
                      text: "By matching the exact leaked password and the timing of the breach.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator places the final piece of evidence onto the board.",
                        "\"Exactly.\"",
                        "\"Now the entire chain begins to make sense.\""
                      ],
                      explanation: [
                        "\"Only one of your old leaked accounts had this specific password attached to it - and that leak became public right before the attacks on your gaming account started.\"",
                        "\"That match, both in the password itself and the timing, is what confirms it as the source rather than the other two old accounts.\"",
                        "\"This is called credential stuffing: attackers take leaked username and password combinations from one breach and automatically test them on other websites.\""
                      ]
                    },
                    {
                      text: "It's simply the oldest account, so it must be the source.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"Age alone doesn't tell us anything.\""
                      ],
                      explanation: [
                        "\"An old account isn't automatically the guilty one - plenty of old accounts never get breached at all.\"",
                        "\"What actually matters is whether the leaked password and the breach timing line up with the attack, and here they clearly do.\""
                      ]
                    },
                    {
                      text: "The investigator can't really be sure - it's just the most likely guess.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator taps the matching timestamps on the screen.",
                        "\"It's not a guess. It's a match.\""
                      ],
                      explanation: [
                        "\"Investigators don't rely on hunches - they rely on evidence that lines up.\"",
                        "\"An exact password match combined with a breach date that fits the timeline isn't a coincidence. It's proof.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator places the final pieces of evidence onto the board.",
                "Login records.",
                "Breach reports.",
                "Stolen credential samples.",
                "Each piece tells part of the story, but the order is unclear.",
                "The investigator studies the evidence carefully.",
                "\"Cyber attacks rarely happen because of one single mistake,\" they explain.",
                "\"They are usually a chain of events where one weakness leads to another.\"",
                "The investigator begins arranging the evidence in chronological order.",
                "\"Let's reconstruct exactly what happened.\""
              ],
              timeline: [
                {
                  time: "Friday, 4:32 PM - Account created",
                  story: [
                    "You download the new game and create your account.",
                    "During registration, you choose the same password you have used for several other websites.",
                    "The password is strong and difficult to guess, but it is not unique."
                  ]
                },
                {
                  time: "Four months later - The Original Breach",
                  story: [
                    "A small website you created an account on years ago suffers a data breach.",
                    "The website's user database is stolen by attackers.",
                    "Among the leaked information are thousands of email addresses and passwords.",
                    "Your old password is included in the stolen data."
                  ]
                },
                {
                  time: "Monday, 10:02 PM",
                  story: [
                    "Cybercriminals obtain the leaked database.",
                    "Instead of manually checking accounts one by one, they use automated scripts to test stolen username and password combinations against popular websites.",
                  ]
                },
                {
                  time: "Friday, 11:36 PM",
                  story: [
                    "The automated system tests your leaked email address and password against the gaming platform.",
                    "The login succeeds immediately.",
                    "The attacker gains access without needing to hack your computer or guess your password."
                  ]
                },
                {
                  time: "Friday, 11:41 PM",
                  story: [
                    "Five minutes later, the same password is tested against your personal email account.",
                    "The login succeeds again.",
                    "The attacker now has access to the account used to recover many of your other online accounts."
                  ]
                },
                {
                  time: "Friday, 11:49 PM",
                  story: [
                    "The attacker changes the recovery email connected to your gaming account.",
                    "They begin sending suspicious messages to your friends while using your account.",
                    "Your items and progress are still disappearing, but you do not know anything is wrong yet."
                  ]
                },
                {
                  time: "Saturday, 2:17 PM",
                  story: [
                    "You log back into the game and notice unusual activity.",
                    "Your friends report receiving suspicious messages from your account.",
                    "You begin the process of recovering your accounts."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "The attacker never broke your password.",
                    "They simply reused a password that had already been exposed somewhere else.",
                    "Because that one password protected two important accounts instead of one, a small forgotten breach became a much bigger problem."
                  ]
                }
              ],
              finalWords: [
                "The investigator leaves you with one final piece of advice.",
                "\"There is an important lesson from this case.\"",
                "\"A strong password is not enough by itself.\"",
                "\"If the same password protects multiple accounts, one small breach can spread from account to account - especially if it reaches your email, since that's what everything else uses to reset itself.\"",
                "\"Use strong passwords.\"",
                "\"But more importantly, make sure every important account has a unique password.\"",
                "\"Good cybersecurity is not about expecting attacks to never happen.\"",
                "\"It is about making sure that when they do happen, they don't spread to your other accounts.\""
              ],
              lesson: [
                  "One password should never protect your entire digital life."
              ]
            }
          }
        ]
      },
      {
        text: "Set up a new password just for this account.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You pause for a moment.",
              "You think back to that school cybersecurity talk - strong passwords, and never reuse them.",
              "You still don't completely understand what could go wrong, but you decide it is worth taking an extra minute.",
              "You create a long, unique password that you have never used before.",
              "It is slightly annoying having to remember another password, but you save it safely and continue.",
              "You click Create Account."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "The game loads instantly. Your friends are already online, waiting.",
              "The new game quickly becomes part of your daily routine.",
              "After school, you complete missions together.",
              "You unlock new items.",
              "You compete with your friends to see who can progress the fastest.",
              "The account becomes another normal part of your online life.",
              "Eventually, you stop thinking about the password completely."
            ]
          },
          {
            type: "timeline", // timeline
            events: [
              {
                time: "One week later",
                story: [
                  "While scrolling through videos after dinner, you notice a headline.",
                  "\"Millions of accounts exposed after another major data breach.\"",
                  "You remember the extra minute you spent creating a unique password.",
                  "For a moment, you wonder if your account could be affected.",
                  "But you quickly remember that this password was never used anywhere else.",
                  "You continue scrolling, feeling reassured."
                ]
              },
              {
                time: "Three months later",
                story: [
                  "A small website you signed up for years ago quietly suffers a data breach.",
                  "The website is not famous.",
                  "The incident barely receives attention.",
                  "Inside the stolen database are thousands of email addresses and passwords.",
                  "Including information from people who reused their passwords across different services."
                ]
              },
              {
                time: "That same night",
                story: [
                  "In a dark room thousands of kilometres away, automated systems begin scanning through the leaked database.",
                  "The attackers are not searching for one specific person.",
                  "They are testing thousands of stolen credentials at the same time.",
                  "Only a small number of these attempts will succeed.",
                  "But one careless mistake - reusing a password - can be enough to turn a random attack into an account takeover."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "Your gaming account is one of the accounts tested by the attackers.",
              "They enter the email address found in the leaked database.",
              "Then they try the password that came with it.",
              "Login failed.",
              "The system doesn't waste time on a second guess. It moves straight on to the next stolen email and password pair, and the next, and the next.",
              "Your account was targeted.",
              "But the password they had was useless here.",
              "Because your password was unique, the breach from another website could not spread any further."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You never notice anything unusual.",
              "Your friends never receive suspicious messages.",
              "Your items and progress remain exactly where you left them.",
              "As far as you know, nothing happened.",
              "However, months later, the game's security team detects the failed attack attempts and contacts you.",
              "They want to show you something interesting.",
              "Your account was attacked.",
              "But it was protected."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A few months later, you receive an unexpected notification from the game's security team.",
                "Several suspicious login attempts were detected on your account.",
                "At first, you are confused.",
                "You don't remember doing anything unusual.",
                "The security team confirms that nobody successfully accessed your account.",
                "However, they offer to show you exactly what happened.",
                "You join a meeting with one of the platform's digital forensics investigators.",
                "The investigator opens a security report containing login records, attack attempts, and system logs.",
                "\"This is an interesting case,\" they say.",
                "\"Someone tried to get into your account.\"",
                "\"But something stopped them.\"",
                "\"Let's investigate why.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Suspicious Login Attempts",
                  evidence: [
                    "Multiple login attempts detected",
                    "Correct email address entered",
                    "Incorrect password entered every time",
                    "Attempts came from multiple unknown locations"
                  ],
                  question: "What does this evidence suggest?",
                  options: [
                    {
                      text: "Someone was repeatedly trying to access your account.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods.",
                        "\"Exactly.\"",
                        "\"This was not a simple mistake.\""
                      ],
                      explanation: [
                        "\"The login attempts came from automated systems rather than a person manually guessing.\"",
                        "\"Attackers often test large numbers of accounts at the same time, hoping some credentials will work.\""
                      ]
                    },
                    {
                      text: "Someone forgot their password.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the locations of the attempts.",
                        "\"That would usually look very different.\""
                      ],
                      explanation: [
                        "\"A forgotten password normally comes from one person, one device, and a small number of attempts.\"",
                        "\"These attempts came from many locations, which suggests an automated attack.\""
                      ]
                    },
                    {
                      text: "The game accidentally locked your account.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator reviews the security logs.",
                        "\"The system behaved exactly as expected.\""
                      ],
                      explanation: [
                        "\"The game did not cause the problem.\"",
                        "\"The security system detected someone attempting to log in and blocked the suspicious activity.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Missing Password",
                  evidence: [
                    "Your email address appeared in an unrelated data breach",
                    "Attackers obtained a list of leaked credentials",
                    "Your password was not found in the leaked data"
                  ],
                  question: "Why did the attackers fail even though they had your email address?",
                  options: [
                    {
                      text: "They did not know your password since you didn't reuse it.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator highlights the leaked database.",
                        "\"Exactly.\""
                      ],
                      explanation: [
                        "\"Your email address was known, but your password was not.\"",
                        "\"Knowing an email address is usually not enough to access an account.\"",
                        "\"The missing piece was the password.\"",
                        "\"Because you used a unique password, they couldn't use your password in the leaked database to access your other accounts.\""
                      ]
                    },
                    {
                      text: "The attackers gave up too quickly.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"They didn't give up. They simply didn't have what they needed.\""
                      ],
                      explanation: [
                        "\"The attackers' scripts tried the exact password leaked from that old breach - not a guess, the real thing.\"",
                        "\"Because you never reused that password, it just didn't match, and the scripts moved straight on to easier targets.\"",
                        "\"If you'd reused that same password on your gaming account, those same stolen credentials would have let them straight in.\""
                      ]
                    },
                    {
                      text: "The attackers could not guess your password since it was long and complex.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator considers the answer.",
                        "\"Length helps, but that isn't the main reason.\""
                      ],
                      explanation: [
                        "\"A long password is useful, but a unique password is what protected you here.\"",
                        "\"Strong, complex passwords like yours can take even the best computers years or even decades to crack, but if attackers already knew the password from another data leak, then all that protection would have been for nothing!\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Account That Stayed Safe",
                  evidence: [
                    "Password was unique",
                    "Password was never reused",
                    "Password did not appear in known leaked databases"
                  ],
                  question: "What was the key reason the attack failed?",
                  options: [
                    {
                      text: "The game blocked all hackers automatically.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator points to the failed login records.",
                        "\"The security system helped, but it wasn't the only reason.\""
                      ],
                      explanation: [
                        "\"The game's security blocks repeated automated attempts to guess your password, but if an attacker already has your password, then these security measures wouldn't have been able to stop them.\"",
                        "\"The fact that they didn't have your gaming account password despite the other website's data breach was the main thing that protected the account.\""
                      ]
                    },
                    {
                      text: "You had two-factor authentication turned on for extra protection.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks your account's security settings.",
                        "\"Actually - no extra protections were switched on here.\""
                      ],
                      explanation: [
                        "\"You didn't have two-factor authentication enabled on this account.\"",
                        "\"What stopped the attackers wasn't an extra layer of security - it was simply that the password itself never matched.\"",
                        "\"That said, turning on two-factor authentication is still worth doing. It would protect you even in cases where a password does leak.\""
                      ]
                    },
                    {
                      text: "The password was unique.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator smiles.",
                        "\"That was the most important decision you made.\""
                      ],
                      explanation: [
                        "\"Even though attackers obtained leaked passwords from other websites, they could not use them to access this account.\"",
                        "\"Your password was completely separate from those breaches.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator places the security logs alongside the failed login records.",
                "Each attempt tells part of the story.",
                "\"The attack itself wasn't unusual,\" the investigator explains.",
                "\"What matters is why it failed.\"",
                "The investigator arranges the evidence into a timeline.",
                "\"Let's reconstruct the attack and see what protected your account.\""
              ],
              timeline: [
                {
                  time: "Friday, 4:32 PM - Account created",
                  story: [
                    "You download the new game and create your account.",
                    "After remembering the advice from your school cybersecurity talk, you choose a new password that has never been used before.",
                    "The account is created successfully."
                  ]
                },
                {
                  time: "Three months earlier - The original breach",
                  story: [
                    "A small website you created an account on years ago suffers a data breach.",
                    "Attackers steal a database containing usernames, email addresses, and passwords.",
                    "Your email address is included in the stolen data.",
                    "However, the password leaked from that website is not the same password protecting your gaming account."
                  ]
                },
                {
                  time: "Monday, 10:02 PM - Stolen credentials obtained",
                  story: [
                    "Cybercriminals obtain the leaked database.",
                    "Automated systems begin testing stolen email and password combinations against popular websites.",
                    "They are hoping that some people reused their passwords."
                  ]
                },
                {
                  time: "Friday, 11:36 PM - Attack attempt",
                  story: [
                    "The attackers test your leaked email address and password against the gaming platform.",
                    "The email address is correct.",
                    "The leaked password is not.",
                    "The login attempt fails immediately."
                  ]
                },
                {
                  time: "Friday, 11:37 PM - Attack abandoned",
                  story: [
                    "The automated system moves on to the next account in the database.",
                    "Your gaming account was targeted, but the stolen password was useless.",
                    "The attack cannot spread any further."
                  ]
                },
                {
                  time: "Months later - Security notification",
                  story: [
                    "The game's security team detects the failed login attempts and notifies you.",
                    "You learn that someone tried to access your account, but they never got inside.",
                    "Your progress, items, and account information remain safe."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "The attackers had your email address.",
                    "They had a leaked password from another website.",
                    "But they did not have the password for this account.",
                    "Using a unique password stopped the breach from spreading."
                  ]
                }
              ],
              finalWords: [
                "The investigator closes the report.",
                "\"This case is a good example of something important.\"",
                "\"Cybersecurity is not about making yourself impossible to target.\"",
                "\"Everyone gets targeted eventually.\"",
                "\"The goal is to make sure an attack cannot turn into a disaster.\"",
                "\"Your unique password meant that a breach somewhere else couldn't spread to your other accounts.\"",
                "\"One account was attacked.\"",
                "\"But the damage stopped there.\"",
                "\"You never know what might happen next, but being cyber-secure means you're always prepared for whatever comes your way.\"",
                "\"That is the power of good security habits.\""
              ],
              lesson: [
                "A unique password can stop an attack before it even begins.",
                "One good security habit can make all the difference."
              ]
            }
          }
        ]
      }
    ]
  }
};

window.scenarios = window.scenarios || [];
window.scenarios.push(studentPasswordCase);
