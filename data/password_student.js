const studentPasswordCase = {
  id: "password_student",
  meta: {
    title: "Password Breach",
    description: "Can you choose a secure password and stop a single data breach from spreading to your gaming account and the rest of your online life?",
    difficulty: "Easy",
    ageGroup: "student",
    style: "Case Files"
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
              "You decide to use the password you've reused on a handful of other accounts over the years, most of which you barely think about anymore.",
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
              "And your email is the key to almost everything else. It's the thing every other account uses to reset a forgotten password.",
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
                    "The login came from an unfamiliar location"
                  ],
                  question: "The attacker entered the correct password immediately. What does this suggest?",
                  options: [
                    {
                      text: "The attacker guessed your password.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator looks at the login history.",
                        "\"If someone was guessing, we would normally see many failed attempts first.\"",                      
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
                        "\"They already had the key.\"",                      
                        "\"The login succeeded immediately because the attacker was using valid credentials.\"",
                        "\"The attacker likely already knew your password from a data breach on a website where you had used the same password.\""
                      ]
                    },
                    {
                      text: "The attacker hacked directly into the game's servers.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the game's security report.",
                        "\"Let's see if there is any evidence of a server breach.\"",                      
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
                        "\"Brute-forcing usually leaves a trail behind.\"",                      
                        "\"There's only one login attempt on record, and it succeeded immediately.\"",
                        "\"A brute-force attack against a password this strong would take far too long, and would show up as hundreds or thousands of failed attempts first. There's no trace of that here.\""
                      ]
                    },
                    {
                      text: "The password became weaker because it was old.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator smiles slightly.",
                        "\"Passwords don't expire just because they have existed for a long time.\"",                      
                        "\"An old password can still be secure if nobody else knows it.\"",
                        "\"The danger comes when attackers discover it and can reuse it elsewhere.\""
                      ]
                    },
                    {
                      text: "The same password was protecting multiple accounts.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator circles several accounts on the screen.",
                        "\"This is where everything connects.\"",                      
                        "\"A strong password is only useful if it stays private.\"",
                        "\"By using the same password across different websites, one breach could expose every account using that password.\"",
                        "\"The attacker didn't defeat your password. They found another place where it had already been exposed.\""
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
                  question: "Several old accounts were involved. Which evidence identifies the real source of the attack?",
                  options: [
                    {
                      text: "The breach containing the exact password match and matching attack timing.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator places the final piece of evidence onto the board.",
                        "\"Exactly.\"",
                        "\"Now the entire chain begins to make sense.\"",                      
                        "\"Only one of your old leaked accounts had this specific password attached to it, and that leak became public right before the attacks on your gaming account started.\"",
                        "\"That match, both in the password itself and the timing, is what confirms it as the source rather than the other two old accounts.\"",
                        "\"This is called credential stuffing: attackers take leaked username and password combinations from one breach and automatically test them on other websites.\""
                      ]
                    },
                    {
                      text: "It's simply the oldest account, so it must be the source.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"Age alone doesn't tell us anything.\"",                      
                        "\"An old account isn't automatically the guilty one. Plenty of old accounts never get breached at all.\"",
                        "\"What actually matters is whether the leaked password and the breach timing line up with the attack, and here they clearly do.\""
                      ]
                    },
                    {
                      text: "There's no real way to know for sure, so it's just an educated guess.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator taps the matching timestamps on the screen.",
                        "\"It's not a guess. It's a match.\"",                      
                        "\"Investigators don't rely on hunches. They rely on evidence that lines up.\"",
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
                "",
                "\"This timeline does not just show what happened to you.\"",
                "\"It reveals every step the attacker took to turn one mistake into a successful attack.\"",
                "",
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
              ],
              chainSummary:[
                "Password reused",
                "Old website breached",
                "Credentials leaked",
                "Credential stuffing attack",
                "Gaming account compromised",
                "Email account compromised",
                "Attack spreads"
              ],
              finalWords: [
                "The investigator closes the case file and looks back over the evidence.",
                "\"Your computer was never hacked.\"",
                "\"Your password was never guessed.\"",
                "\"The attacker simply found a password that was already exposed and tried it somewhere else.\"",
                "\"One reused password turned a small forgotten breach into a much bigger problem.\"",
                "\"Make sure every important account has a unique password.\"",
                "\"Good cybersecurity is not about expecting attacks to never happen.\"",
                "\"It is about making sure that when they do happen, they don't spread across your entire digital life.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator closes the case file.",
                  "After reviewing what happened, they explain how a few simple habits could have prevented the attack.",
                  "The investigator leaves you with some advice to make your online life more secure."
                ],
                advice: [
                  {
                    title: "Create unique passwords",
                    text: "Never reuse the same password across different accounts. If one account is breached, a unique password prevents attackers from accessing your other accounts."
                  },
                  {
                    title: "Protect your important accounts",
                    text: "Your email account is especially important because it is often used to recover other accounts. Make sure your most important accounts have strong, unique passwords."
                  },
                  {
                    title: "Use a password manager",
                    text: "A password manager can create and safely store strong passwords, making it easier to use a different password for every account."
                  },
                  {
                    title: "Enable extra security features",
                    text: "Turn on two-factor authentication (2FA) when possible to add another layer of protection if your password is ever exposed."
                  }
                ]
              },
              epilogue: {
                time: "Six months later",
                story: [
                  "The attack feels like a distant memory, but you still remember the stress of losing access to your accounts.",
                  "",
                  "After the incident, you went through every account you could find.",
                  "Old passwords were replaced.",
                  "Important accounts were secured.",
                  "Anything you no longer used was deleted.",
                  "",
                  "You started using a password manager to create and store unique passwords instead of relying on one password you could remember.",
                  "You enabled two-factor authentication on your most important accounts, adding another layer of protection if a password is ever exposed.",
                  "",
                  "You also became more cautious when reading security warnings and news about breaches.",
                  "Instead of thinking \"that probably won't happen to me,\" you now understand how quickly one leaked password can affect your entire digital life.",
                  "",
                  "The attack started with a single reused password.",
                  "But the recovery taught you something important:",
                  "",
                  "Cybersecurity is not about being perfect.",
                  "It is about building habits that stop one mistake from becoming a much bigger problem."
                ]
              },
              lesson: [
                "A single reused password turned a small breach into a much bigger attack.",
                "Small security choices made early can prevent major problems later."
              ],
              toolPromo: {
                text: "Now that you've seen how much a reused password can cost, try our password strength checker and generator to build safer habits going forward.",
                linkText: "Open the Password Toolkit \u2192",
                href: "tools.html#generator-tool"
              }
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
              "You think back to that school cybersecurity talk: strong passwords, and never reuse them.",
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
                  "But one careless mistake, reusing a password, can be enough to turn a random attack into an account takeover."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "The attackers' tools test the leaked password against your email account first.",
              "It matches. They're in.",
              "Searching through your inbox, they find a notification confirming your new gaming account.",
              "They try the same password there.",
              "Login failed.",
              "Your gaming account uses something completely different, and the leaked password has nothing to open it with.",
              "The system doesn't waste time. It moves on to the next name on a very long list."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "A few days later, you get an alert from your email provider: a sign-in from an unfamiliar device.",
              "Your stomach drops for a second.",
              "You change your email password right away and look through the account for anything unusual.",
              "Nothing seems to have been sent or deleted, but it's unsettling not knowing exactly what someone else might have read.",
              "You check your gaming account out of habit. Everything is exactly where you left it.",
              "Your friends never receive any strange messages.",
              "It's an uncomfortable few days, but the damage stops with your inbox."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A few days after securing your email, you're still unsettled by how easily someone got in.",
                "Your email provider offers a callback with their security team to explain exactly what happened.",
                "A digital forensics investigator joins the call, sharing a short report: one successful login to your email, and one failed attempt somewhere else.",
                "\"Your email was accessed. Your gaming account wasn't,\" the investigator says.",
                "\"Let's go through why that difference happened.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Email Break-In",
                  evidence: [
                    "A successful login occurred on your email account from an unfamiliar device",
                    "The correct password was entered on the first attempt",
                    "That password matched one from an old, unrelated data breach"
                  ],
                  question: "The attacker entered the correct password immediately. How did they get it?",
                  options: [
                    {
                      text: "They already had it from an old, unrelated data breach.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator pulls up the old breach report.",
                        "\"That's exactly it.\"",                      
                        "\"Your email password was exposed years ago in a breach that had nothing to do with your email provider.\"",
                        "\"Because you'd used that same password for your email too, the old leak became a working key to your inbox.\""
                      ]
                    },
                    {
                      text: "They guessed it through trial and error.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the login history.",
                        "\"There's exactly one attempt on record, and it succeeded immediately.\"",                      
                        "\"Guessing a real password through trial and error takes many attempts and leaves a trail of failures.\"",
                        "\"There's no such trail here.\""
                      ]
                    },
                    {
                      text: "Your email provider's own systems were broken into.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the provider's status page and incident history.",
                        "\"Worth ruling out, but that's not what happened here.\"",                      
                        "\"There's no record of any breach on your email provider's systems.\"",
                        "\"This was specific to your account, not a wider problem with the provider.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Trail That Went Cold",
                  evidence: [
                    "The attacker found a notification about your gaming account inside your email",
                    "The same leaked password was tried on your gaming account",
                    "That login attempt failed"
                  ],
                  question: "The attacker found your gaming account. Why didn't that lead anywhere?",
                  options: [
                    {
                      text: "The attackers gave up too quickly.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"They didn't give up. They simply didn't have what they needed.\"",                      
                        "\"The attackers' scripts tried the exact password that had just worked on your email. Not a guess. The real thing.\"",
                        "\"Because you never reused that password on your gaming account, it just didn't match.\""
                      ]
                    },
                    {
                      text: "Your gaming account had a completely different password, so finding it wasn't the same as unlocking it.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator highlights the failed login.",
                        "\"Exactly that.\"",                      
                        "\"Once inside your email, the attacker could see your gaming account almost immediately.\"",
                        "\"But seeing an account and unlocking it are two different problems.\"",
                        "\"The password that worked on your email had nothing to do with the one protecting your gaming account.\""
                      ]
                    },
                    {
                      text: "The attackers could not guess your gaming password since it was long and complex.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator considers the answer.",
                        "\"Length helps, but that isn't the main reason.\"",                      
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
                        "\"The security system helped, but it wasn't the only reason.\"",                      
                        "\"The game's security blocks repeated automated attempts to guess your password, but if an attacker already has your password, then these security measures wouldn't have been able to stop them.\"",
                        "\"The fact that they didn't have your gaming account password despite the other website's data breach was the main thing that protected the account.\""
                      ]
                    },
                    {
                      text: "You had two-factor authentication turned on for extra protection.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks your account's security settings.",
                        "\"Actually, no extra protections were switched on here.\"",                      
                        "\"You didn't have two-factor authentication enabled on this account.\"",
                        "\"What stopped the attackers wasn't an extra layer of security. It was simply that the password itself never matched.\"",
                        "\"That said, turning on two-factor authentication is still worth doing. It would protect you even in cases where a password does leak.\""
                      ]
                    },
                    {
                      text: "The password was unique.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator smiles.",
                        "\"That was the most important decision you made.\"",                      
                        "\"Even though attackers obtained leaked passwords from other websites, they could not use them to access this account.\"",
                        "\"Your password was completely separate from those breaches.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator places two sets of login records onto the screen.",
                "One account was accessed.",
                "One account was left untouched.",
                "",
                "At first, the difference is not obvious.",
                "The same attacker.",
                "The same stolen data.",
                "The same automated tools.",
                "",
                "\"So why did one account get compromised while the other stayed safe?\" the investigator asks.",
                "\"The answer is hidden in the choices made before the attack even began.\"",
                "",
                "\"This timeline does not just show what happened to you.\"",
                "\"It also reveals what the attacker tried to do, and the exact moment where the attack was stopped.\"",
                "",
                "The investigator begins arranging the evidence in chronological order.",
                "\"Let's reconstruct what happened from both sides.\""
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
                    "Your email address, and the password you'd used on that old site, are both included in the stolen data.",
                    "That same password also happens to be the one protecting your email account, though not your new gaming account."
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
                  time: "Friday, 11:20 PM - Email compromised",
                  story: [
                    "The attackers test your leaked email address and password against your email provider.",
                    "The password matches.",
                    "The attacker is now inside your email."
                  ]
                },
                {
                  time: "Friday, 11:36 PM - Attack attempt",
                  story: [
                    "Searching your inbox, the attacker finds a notification confirming your new gaming account.",
                    "They try the same password there.",
                    "The login attempt fails immediately."
                  ]
                },
                {
                  time: "Friday, 11:37 PM - Attack abandoned",
                  story: [
                    "The automated system moves on to the next account in the database.",
                    "Your gaming account was targeted, but the stolen password was useless there.",
                    "The attack cannot spread any further."
                  ]
                },
                {
                  time: "Days later - Security notification",
                  story: [
                    "Your email provider detects the unfamiliar login and alerts you.",
                    "You secure your email and confirm your gaming account was never touched."
                  ]
                },
              ],
              chainSummary: [
                "Unique password chosen",
                "Old website breached",
                "Credentials leaked",
                "Attackers attempt credential stuffing",
                "Email account compromised",
                "Gaming password does not match",
                "Attack stops",
                "Damage does not spread"
              ],
              finalWords: [
                "The investigator reviews the evidence one last time.",
                "\"This case is a good example of something important.\"",
                "\"The attacker did get in, just not where it could do the most damage.\"",
                "\"Your email was real access. Your gaming account never was.\"",
                "\"The difference was one password, used in exactly one place.\"",
                "\"You never know what might happen next, but being cyber-secure means you're always prepared for whatever comes your way.\"",
                "\"That is the power of good security habits.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator closes the case file.",
                  "\"Your decision prevented the attack from spreading.\"",
                  "\"But cybersecurity is about building strong habits over time.\"",
                  "The investigator leaves you with some advice to make your online life even more secure."
                ],
                advice: [
                  {
                    title: "Continue using unique passwords",
                    text: "A unique password means that a breach somewhere else cannot automatically put your other accounts at risk."
                  },
                  {
                    title: "Keep important accounts protected",
                    text: "Accounts like email, school accounts, and banking services should always have their own strong passwords because they can provide access to other information."
                  },
                  {
                    title: "Use a password manager",
                    text: "Password managers make it easier to maintain strong security habits without needing to remember dozens of different passwords."
                  },
                  {
                    title: "Add extra layers of security",
                    text: "Two-factor authentication can protect your accounts even if someone discovers your password."
                  }
                ]
              },
              epilogue: {
                time: "One year later",
                story: [
                  "The data breach from the old website is almost forgotten.",
                  "Thousands of accounts were affected, but yours was not one of them.",
                  "",
                  "Your gaming account continued exactly as normal.",
                  "The extra minute you spent creating a unique password prevented a much bigger problem.",
                  "",
                  "But for you, it changed the way you think about online security.",
                  "Your gaming account was never compromised because the password protecting it was unique.",
                  "One simple decision prevented one leaked password from becoming access to everything else.",
                  "",
                  "Since then, you have started improving your security habits even further.",
                  "You use a password manager to create and store strong, unique passwords for your accounts.",
                  "You enable two-factor authentication on important accounts, adding another layer of protection if a password is ever exposed.",
                  "You also become more careful about suspicious messages, unexpected login alerts, and websites asking for your information.",
                  "",
                  "Cybersecurity is no longer something you only think about after something goes wrong.",
                  "It has become part of your everyday routine."
                ]
              },
              lesson: [
                "A unique password protected your gaming account. It didn't protect your email, because that one wasn't unique.",
                "One good habit stops damage from spreading, but only on the account it's actually used on."
              ],
              toolPromo: {
                text: "Now that you've seen how much a reused password can cost, try our password strength checker and generator to build safer habits going forward.",
                linkText: "Open the Password Toolkit \u2192",
                href: "tools.html#generator-tool"
              }
            }
          }
        ]
      }
    ]
  }
};

window.scenarios = window.scenarios || [];
window.scenarios.push(studentPasswordCase);
