const studentPasswordCase = {
  id: "password_student",
  meta: {
    title: "Password Breach",
    description: "How one reused password can let an old, forgotten breach reach into an account you thought was safe.",
    difficulty: "Easy",
    time: "10-15 minutes",
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
              "You quickly open your account settings and try to change your password.",
              "The website asks you to sign in again.",
              "You enter your password.",
              "Incorrect password.",
              "You try again, more carefully this time.",
              "Incorrect password.",
              "A feeling of panic starts to build.",
              "Someone else now controls your account.",
              "After contacting the game's support team and answering several security questions, you eventually recover access a few days later.",
              "Your account is finally back.",
              "The first thing you do afterward is go through every account you can still remember and change that password on each one.",
              "It takes over an hour.",
              "You keep thinking you should have done this three months ago."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A few days after recovering your account, you still can't stop thinking about what happened.",
                "You remember going to sleep that night with everything feeling completely normal.",
                "Then the next day, your account was gone.",
                "You want to know one thing:",
                "\"How did someone get inside?\"",
                "The game's support team connects you with a digital forensic investigator who specialises in analysing cyber attacks.",
                "During the meeting, the investigator opens a digital case file containing login records, security reports, and leaked data samples.",
                "\"The good news is that your computer was not hacked,\" the investigator explains.",
                "\"The attacker didn't break through your security.\"",
                "\"They found a different way in.\"",
                "\"Let's examine the evidence and reconstruct exactly what happened.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Impossible Login",
                  evidence: [
                    "A successful login occurred while you were asleep",
                    "The correct email address was used",
                    "The correct password was entered on the first attempt",
                    "The login came from an unfamiliar location"
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
                      text: "The password was too simple.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"This is the interesting part of the case.\""
                      ],
                      explanation: [
                        "\"Your password was not weak.\"",
                        "\"It was long, complex, and difficult to guess.\"",
                        "\"The problem was not the quality of the password.\""
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
                  title: "Case File #3 - The Forgotten Account",
                  evidence: [
                    "An old website account was found in a leaked database",
                    "Your email address appeared in the breach",
                    "The same password was attached to the account"
                  ],
                  question: "How did a forgotten account lead to your gaming account being compromised?",
                  options: [
                    {
                      text: "The attacker used the leaked password on other websites.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator places the final piece of evidence onto the board.",
                        "\"Exactly.\"",
                        "\"Now the entire chain begins to make sense.\""
                      ],
                      explanation: [
                        "\"These attacks are called credential stuffing.\"",
                        "\"Attackers take leaked username and password combinations from one breach and automatically test them on other websites.\"",
                        "\"Because your gaming account reused the same password, the stolen credentials worked.\""
                      ]
                    },
                    {
                      text: "The attacker manually searched for your account specifically.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"It feels personal, but it usually isn't.\""
                      ],
                      explanation: [
                        "\"Cybercriminals rarely choose individual victims at random.\"",
                        "\"The process is automated.\"",
                        "\"Your account was one of thousands tested, and unfortunately, your credentials worked.\""
                      ]
                    },
                    {
                      text: "The attacker installed something on your computer.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator reviews your device security logs.",
                        "\"Let's check if your computer was involved.\""
                      ],
                      explanation: [
                        "\"There are no signs of malware or a compromised device.\"",
                        "\"The attacker never needed access to your computer.\"",
                        "\"They only needed the correct login details.\""
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
                  time: "2026-01-12 | 03:24:17",
                  story: [
                    "A small website you created an account on years ago suffers a data breach.",
                    "The website's user database is stolen by attackers.",
                    "Among the leaked information are thousands of email addresses and passwords."
                  ]
                },
                {
                  time: "2026-04-14 | 18:52:41",
                  story: [
                    "Cybercriminals obtain the leaked database.",
                    "They do not manually check each account.",
                    "Instead, they use automated scripts to test the stolen credentials against popular websites."
                  ]
                },
                {
                  time: "2026-04-17 | 23:41:08",
                  story: [
                    "The automated system tests your leaked email address and password against the gaming platform.",
                    "The login attempt succeeds immediately.",
                    "The attacker gains access without needing to hack your computer or guess your password."
                  ]
                },
                {
                  time: "2026-04-17 | 23:41:32",
                  story: [
                    "A new device is registered on your account.",
                    "The attacker begins accessing your items and account information."
                  ]
                },
                {
                  time: "2026-04-18 | 08:15:32",
                  story: [
                    "Your friends receive suspicious messages from your account.",
                    "Some of your rare items and in-game currency are missing."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "The attacker never broke your password.",
                    "They simply reused a password that had already been exposed somewhere else.",
                    "One reused password allowed a small breach to become a much larger attack."
                  ]
                }
              ],
              lesson: [
                "The investigator leaves you with one final piece of advice.",
                "\"There is an important lesson from this case.\"",
                "\"A strong password is not enough by itself.\"",
                "\"If the same password protects multiple accounts, one small breach can create a chain reaction.\"",
                "\"Use strong passwords.\"",
                "\"But more importantly, make sure every important account has a unique password.\"",
                "\"Good cybersecurity is not about expecting attacks to never happen.\"",
                "\"It is about making sure that when they do happen, they stop with you.\""
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
              "The warning from school comes back into your mind.",
              "You still don't completely understand what could go wrong, but you decide it is worth taking an extra minute.",
              "You create a long, unique password that you have never used before.",
              "It is slightly annoying having to remember another password, but you save it safely and continue.",
              "You click Create Account."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "Within seconds, you are inside the game.",
              "Your friends welcome you immediately.",
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
              "Then they try the leaked password.",
              "Login failed.",
              "The attacker tries again using another leaked password.",
              "Another failure.",
              "The system moves on to the next account.",
              "Your account was targeted.",
              "But the password they had was useless.",
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
                "You join a meeting with one of their digital forensic investigators.",
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
                        "\"Actually, they tried many times.\""
                      ],
                      explanation: [
                        "\"The attackers used automated scripts to repeatedly guess your password based on your leaked password, but because you never reused passwords, their scripts failed and they ultimately gave up and moved on to easier targets.\"",
                        "\"If you had used the same password for your gaming account as the breached website, then attackers would easily have been able to access your account.\""
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
                      text: "The attacker was unlucky and made a typo somewhere.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"Luck was not the main factor.\""
                      ],
                      explanation: [
                        "\"Security does not rely on attackers making mistakes.\"",
                        "\"It relies on making sure that attackers had a hard time getting in even if they didn't make any mistakes.\"",
                        "\"You never know when an attacker will attack and how skilled they will be - defenders always have to be alert and always make secure choices.\""
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
                  time: "2026-01-12 | 03:24:17",
                  story: [
                    "A small website you created an account on years ago suffers a data breach.",
                    "The attackers steal a database containing usernames, email addresses, and passwords."
                  ]
                },
                {
                  time: "2026-04-14 | 18:52:41",
                  story: [
                    "Cybercriminals obtain the leaked database.",
                    "Automated scripts begin testing the stolen credentials against popular websites.",
                    "This technique is known as credential stuffing."
                  ]
                },
                {
                  time: "2026-04-17 | 23:41:08",
                  story: [
                    "The attackers test your email address against the gaming platform.",
                    "They attempt to sign in using the leaked password."
                  ]
                },
                {
                  time: "2026-04-17 | 23:41:09",
                  story: [
                    "Authentication fails.",
                    "The password does not match your gaming account."
                  ]
                },
                {
                  time: "2026-04-17 | 23:41:15",
                  story: [
                    "The attackers continue testing other stolen credentials.",
                    "Your account is ignored because the leaked password is useless."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "The attack reached your account.",
                    "But it couldn't go any further.",
                    "Using a unique password kept your account secure and prevented the initial breach from spreading."
                  ]
                }
              ],
              lesson: [
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
              ]
            }
          }
        ]
      }
    ]
  }
};

const scenarios = [studentPasswordCase];

window.scenarios = scenarios;
