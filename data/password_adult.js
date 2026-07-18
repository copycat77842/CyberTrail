const adultPasswordCase = {
  id: "password_adult",
  meta: {
    title: "Password Breach",
    description: "How one reused password can turn a single old leak into a banking, email, and workplace crisis.",
    difficulty: "Medium",
    ageGroup: "working-adult"
  },
  intro: [
    "It's a Tuesday evening, and you've finally sat down after a long day at work.",
    "Your new bank sent an email last week: your account is ready, and you can now manage everything online.",
    "You've been meaning to set it up for days, and tonight is the first quiet moment you've had.",
    "You open your laptop, coffee in hand, and pull up the bank's website.",
    "Direct deposits, bill payments, savings goals - it'll be nice to have it all in one place."
  ],
  setup: [
    "The signup page is straightforward. Full name. Date of birth. Address. Employer.",
    "You move through it quickly - you've done this a dozen times before for other accounts.",
    "Then the final field appears: Create Password.",
    "You pause for half a second.",
    "You have a password you've used for years, across more accounts than you could probably list.",
    "It's long. It has a mix of letters, numbers, and a symbol or two.",
    "You've always assumed that was enough.",
    "A small banner underneath the field reads: \"For your security, we recommend using a unique password for your banking account.\"",
    "You glance at it, then glance at the clock. It's late, and you've still got emails to answer before bed.",
    "You decide it's your choice to make."
  ],
  choice: {
    text: "What password do you set for your new banking account?",
    options: [
      {
        text: "Use the password you already use everywhere else.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You type in your usual password - the one saved in your head, not in any password manager.",
              "It's the same one protecting your email, your streaming accounts, a couple of old shopping sites, and now, your bank.",
              "The security banner is still there, quietly asking you to reconsider.",
              "You skim past it.",
              "It's a strong password. Long, complex, familiar.",
              "You've never had a problem with it before.",
              "You click Confirm and move on with your evening."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "Over the next few weeks, the account becomes part of your routine.",
              "Rent goes out automatically. Paychecks come in. You check the balance on your phone during your commute.",
              "It's convenient. Reliable. Unremarkable.",
              "Work stays busy - deadlines, meetings, the usual.",
              "Your banking app becomes just another icon you glance at without thinking twice."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "Two weeks later",
                story: [
                  "You get a notification from a news app: \"Another major retailer confirms data breach affecting millions.\"",
                  "You recognize the name. You had an account there, years ago, for a single online order.",
                  "You think about checking whether your information was involved.",
                  "You're in the middle of a work call.",
                  "You tell yourself you'll look into it later.",
                  "You don't."
                ]
              },
              {
                time: "Six weeks later",
                story: [
                  "The retailer's breach quietly makes its way into a leaked-data marketplace online.",
                  "Your old account - email address and password included - is bundled with millions of others and sold for a small price.",
                  "You never hear about this part. Almost nobody does.",
                  "It happens far away from anything you'd ever see."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "On a Thursday night, while you're asleep, an automated system somewhere begins working through the leaked list.",
              "Email, password. Email, password. Thousands of pairs, tested one after another against banks, email providers, and workplace logins.",
              "Most fail instantly. Most people don't reuse passwords quite so consistently.",
              "You do.",
              "Your email account is tested first - it's usually the easiest to find. The password matches.",
              "The attacker is in.",
              "From inside your email, they search for anything useful: bank statements, password reset emails, your employer's name in old messages.",
              "They find your new bank's welcome email, still sitting in your inbox.",
              "They try the same password there.",
              "It matches again.",
              "Two accounts. One password. No alarms going off anywhere - because nothing was actually broken into. Every door was simply unlocked with a key that already existed."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You wake up Friday morning to a bank notification: a login from an unfamiliar device.",
              "You dismiss it half-asleep, assuming it's your phone being weird.",
              "By the time you're at your desk, a second notification arrives: a transfer request pending approval.",
              "You never made one.",
              "Panic sets in. You try to log into your email to check for anything unusual - and can't. Your password no longer works.",
              "You call the bank first. They freeze the pending transfer just in time, but flag several smaller, already-completed transactions you don't recognize.",
              "You call your email provider next. Recovery takes most of the day - verifying your identity, proving the account is yours.",
              "Somewhere in the middle of it, a message arrives from your IT department at work: \"We noticed a login attempt on your work account from an unrecognized location. Please confirm this was you.\"",
              "It wasn't.",
              "Your stomach drops as you realize how far this has actually reached.",
              "By the end of the week, you've spent hours on the phone, changed passwords on nearly every account you can remember, and enabled two-factor authentication on all of them - something you'd always meant to do eventually.",
              "The bank reverses the smaller transactions after an investigation. It takes three weeks."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "A week after everything is finally back under control, your bank's fraud department schedules a call to walk you through what happened.",
                "A digital forensics investigator joins the call, sharing their screen: login records, timestamps, and a breach report from a retailer you barely remember shopping at.",
                "\"Your accounts weren't hacked in the way people usually imagine,\" the investigator explains.",
                "\"Nobody broke through a firewall or cracked an encryption key.\"",
                "\"They used a password that was already sitting out in the open - because it had been reused everywhere.\"",
                "\"Let's walk through exactly how one leak became three separate incidents.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The First Domino",
                  evidence: [
                    "A successful email login occurred at 2:47 AM from an unrecognized device",
                    "The correct password was entered on the first attempt",
                    "No phishing emails or suspicious links were found in your inbox beforehand"
                  ],
                  question: "There's no sign of phishing or malware. How did the attacker get your email password?",
                  options: [
                    {
                      text: "They must have guessed it through trial and error.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator points to the login count.",
                        "\"There's exactly one login attempt on record - and it succeeded immediately.\""
                      ],
                      explanation: [
                        "\"Guessing a password this long and complex through trial and error would take an impractical amount of time, and would leave a trail of failed attempts.\"",
                        "\"There's no such trail here.\""
                      ]
                    },
                    {
                      text: "They already had it from an unrelated data breach.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator pulls up the retailer's breach report.",
                        "\"This is the piece that connects everything.\""
                      ],
                      explanation: [
                        "\"Your password was exposed years ago in a completely unrelated breach at an online retailer.\"",
                        "\"Because you used the same password for your email, that old leak became a working key to your inbox.\""
                      ]
                    },
                    {
                      text: "Your email provider's servers were compromised.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the provider's status page and incident history.",
                        "\"Worth ruling out, but that's not what happened here.\""
                      ],
                      explanation: [
                        "\"There's no record of any breach on your email provider's systems around this time.\"",
                        "\"This was an account-level compromise, not a server-level one - the difference matters, because it means the fix is entirely in your hands.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - Why the Bank Fell Too",
                  evidence: [
                    "The bank login occurred nine minutes after the email login",
                    "The bank's welcome email, containing your account details, was still unread in your inbox",
                    "The same password was used to log into the bank account successfully"
                  ],
                  question: "Your bank account uses the same login provider as most of your other accounts. What let the attacker move from your email to your bank so quickly?",
                  options: [
                    {
                      text: "They searched your inbox and reused the same password on your bank account.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator highlights the nine-minute gap.",
                        "\"That's exactly what happened.\""
                      ],
                      explanation: [
                        "\"Once inside your email, the attacker could see who you bank with just by searching your inbox.\"",
                        "\"They tried the same password there - the one you'd already proven you reuse - and it worked immediately.\"",
                        "\"Your email wasn't just one account. It was a map to every other account you own.\""
                      ]
                    },
                    {
                      text: "Banks and email providers share security information.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator shakes their head.",
                        "\"That's not how any of this works.\""
                      ],
                      explanation: [
                        "\"Banks and email providers are completely separate companies with no shared access to your credentials.\"",
                        "\"The connection here wasn't a technical one - it was the fact that you used the same password for both.\""
                      ]
                    },
                    {
                      text: "The bank's password requirements were too weak.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator reviews the bank's password policy.",
                        "\"Actually, their requirements are quite strict.\""
                      ],
                      explanation: [
                        "\"The bank required a long, complex password - and that's exactly what you gave it.\"",
                        "\"The problem wasn't the strength of the password. It was that the exact same one already existed somewhere else, exposed.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - The Reach Into Work",
                  evidence: [
                    "A password-reset email for your work account was sent from your email inbox",
                    "Your workplace login uses your personal email as a recovery address",
                    "IT flagged a login attempt from the same unrecognized location as the email and bank logins"
                  ],
                  question: "You never gave anyone your work password. How did the attacker reach your workplace account?",
                  options: [
                    {
                      text: "They never actually accessed your work account - IT's alert was unrelated.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator compares the login locations.",
                        "\"They match exactly. This isn't a coincidence.\""
                      ],
                      explanation: [
                        "\"The location, timing, and device fingerprint of the work login attempt match the email and bank incidents precisely.\"",
                        "\"This was very likely the same person, working through the same list of accounts.\""
                      ]
                    },
                    {
                      text: "They used your compromised email to request a password reset for your work account.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator points to the reset email.",
                        "\"There it is.\""
                      ],
                      explanation: [
                        "\"Your work account's password reset process sends a link to your personal email if requested.\"",
                        "\"Once the attacker controlled your email, they could request a reset for almost any account tied to it - without ever needing to guess a single other password.\"",
                        "\"This is exactly why one compromised email account is often far more dangerous than any single other account.\""
                      ]
                    },
                    {
                      text: "Your workplace network itself was breached separately.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks with your IT department's own incident report.",
                        "\"Their systems show no signs of intrusion.\""
                      ],
                      explanation: [
                        "\"Your company's network and internal systems were never touched.\"",
                        "\"The attacker didn't need to get past any corporate security - your own email account gave them a much easier path in.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lays out three incident reports side by side - email, bank, and workplace - each one initially reported as if it were a separate problem.",
                "\"Most people assume these are three unrelated attacks,\" they say.",
                "\"They very rarely are.\"",
                "\"Let's line up the timestamps and see how they actually connect.\""
              ],
              timeline: [
                {
                  time: "Years earlier",
                  story: [
                    "You create an account at an online retailer for a single purchase, using your everyday password.",
                    "You forget about it almost immediately."
                  ]
                },
                {
                  time: "The original breach",
                  story: [
                    "The retailer suffers a data breach. Your email and password are among millions exposed.",
                    "It barely makes the news. You never hear about it."
                  ]
                },
                {
                  time: "Weeks later",
                  story: [
                    "The leaked data is bundled and sold on to other criminal groups.",
                    "Automated tools begin testing the leaked email-password pairs against major email and banking providers."
                  ]
                },
                {
                  time: "2:47 AM",
                  story: [
                    "Your email account is tested and logged into successfully."
                  ]
                },
                {
                  time: "2:56 AM",
                  story: [
                    "Your bank's welcome email is found in your inbox.",
                    "The same password is tried on your bank account. It works."
                  ]
                },
                {
                  time: "3:10 AM",
                  story: [
                    "A password reset is requested for your workplace account, using your now-compromised email to receive the link."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "One password, reused across your email, your bank, and effectively your workplace, turned a single old, forgotten leak into three separate crises in under half an hour.",
                    "None of it required breaking into anything. It only required one password that already worked everywhere."
                  ]
                }
              ],
              lesson: [
                "The investigator closes the report and leans back.",
                "\"Here's the part I want you to really take with you.\"",
                "\"Your email account isn't just one account among many. It's the master key to almost everything else you own online.\"",
                "\"If one password protects your email and your bank and your work login, then one old, forgotten breach can compromise all three at once.\"",
                "\"A password manager and unique passwords for every important account would have stopped this at the very first step.\"",
                "\"So would two-factor authentication - even a correct password wouldn't have been enough on its own.\"",
                "\"This wasn't about being careless. It's just how convenient habits quietly turn into risk over time.\""
              ]
            }
          }
        ]
      },
      {
        text: "Set up a new, unique password just for this account.",
        outcome: [
          {
            type: "text", // feedback
            text: [
              "You glance at the security banner again: \"We recommend using a unique password for your banking account.\"",
              "It's a small piece of friction at the end of a long day, but you decide it's worth it - this is your money, after all.",
              "You open a password manager you set up a while back but rarely use, and let it generate something long and random.",
              "You save it, copy it into the field, and click Confirm.",
              "It takes an extra minute. You almost skipped it."
            ]
          },
          {
            type: "text", // normalLife
            text: [
              "The account settles into your routine just like any other.",
              "Rent goes out automatically. Paychecks come in. You check the balance on your phone during your commute.",
              "The unique password sits safely in your password manager, autofilling whenever you need it.",
              "You don't think about it again."
            ]
          },
          {
            type: "timeline",
            events: [
              {
                time: "Two weeks later",
                story: [
                  "You get a notification from a news app: \"Another major retailer confirms data breach affecting millions.\"",
                  "You recognize the name. You had an account there, years ago, for a single online order.",
                  "For a second you wonder if it matters.",
                  "Then you remember: that old password isn't the one protecting your bank, or even your email anymore.",
                  "You make a mental note to update your remaining old accounts sometime, and get back to your evening."
                ]
              },
              {
                time: "Six weeks later",
                story: [
                  "The retailer's breach quietly makes its way into a leaked-data marketplace online.",
                  "Your old account - email address and password included - is bundled with millions of others and sold for a small price.",
                  "You never hear about this part. Almost nobody does."
                ]
              },
              {
                time: "That same night",
                story: [
                  "Somewhere far away, automated tools begin testing the leaked list against banks, email providers, and workplace logins.",
                  "Your old email address is tested first, paired with the old password.",
                  "It doesn't match anything current - you changed your email password some time ago, after finally getting around to it."
                ]
              }
            ]
          },
          {
            type: "text", // attack
            text: [
              "The attacker's tools try your email. Failed.",
              "They try your bank, using the same leaked password. Failed.",
              "There's no reset link to chase, no inbox to search, no map to the rest of your accounts.",
              "The tools move on within seconds, on to the next name on a very long list.",
              "Nothing about the attempt is remarkable enough to even register with you."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "Weeks pass. Nothing changes.",
              "Then, one afternoon, an email arrives from your bank's security team: \"We detected and blocked a suspicious login attempt on your account.\"",
              "You read it twice, a little unsettled.",
              "You call the number listed just to be safe. A representative confirms it: someone tried to log in using a password that had appeared in an old, unrelated data breach.",
              "\"It didn't match your current password,\" they explain, \"so the attempt failed automatically.\"",
              "You hang up, oddly relieved, and open your password manager to check your other accounts out of habit.",
              "Everything is exactly where you left it."
            ]
          },
          {
            type: "investigation",
            data: {
              intro: [
                "Curious about how close the call actually was, you request a callback from the bank's fraud team.",
                "A digital forensics investigator joins, sharing a short report: one login attempt, one failure, case closed within seconds on their end.",
                "\"Most of what I do is explain the damage after the fact,\" the investigator says.",
                "\"This one's a nice change - let's walk through why it didn't go anywhere.\""
              ],
              clues: [
                {
                  title: "Case File #1 - The Attempted Break-In",
                  evidence: [
                    "A login attempt occurred using a password linked to an old retailer breach",
                    "The password did not match your current bank password",
                    "The attempt was automatically blocked after a single failure"
                  ],
                  question: "The attacker had a real, once-valid password of yours. Why didn't it work here?",
                  options: [
                    {
                      text: "The bank's system randomly rejected the login.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks the system logs.",
                        "\"Nothing random about it - the system did exactly what it's designed to do.\""
                      ],
                      explanation: [
                        "\"The login was rejected because the password itself was simply wrong for this account.\"",
                        "\"There's no randomness involved - a login either matches or it doesn't.\""
                      ]
                    },
                    {
                      text: "The password had been leaked from a different account and was never reused here.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator pulls up your account creation record.",
                        "\"Exactly right.\""
                      ],
                      explanation: [
                        "\"That password was tied to an old retailer account, not your bank.\"",
                        "\"Because you generated a completely different, unique password when you set up this account, the leaked one simply had nothing to unlock.\""
                      ]
                    },
                    {
                      text: "The bank has a stronger firewall than most other companies.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator smiles slightly.",
                        "\"A good firewall wouldn't have mattered here at all.\""
                      ],
                      explanation: [
                        "\"This wasn't an attack on the bank's infrastructure - it was someone trying to log in with a specific password.\"",
                        "\"Firewalls defend against a different kind of threat. What stopped this one was simply that the password didn't match.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Missing Map",
                  evidence: [
                    "The same leaked credentials were tried against your email account first",
                    "That login also failed, since you'd previously changed your email password",
                    "No password-reset emails or account-recovery attempts were logged anywhere"
                  ],
                  question: "In cases where this succeeds, the attacker usually reaches multiple accounts within minutes. Why did it stop completely here?",
                  options: [
                    {
                      text: "Your email account acted like a locked door with no key that fit - so there was nothing to search through, and nowhere else to go.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator nods.",
                        "\"That's the heart of it.\""
                      ],
                      explanation: [
                        "\"In cases where the email password does match, attackers typically search the inbox for banking details, workplace information, anything useful.\"",
                        "\"Here, the very first door was already locked with a different key. There was no inbox to search and no trail to follow to any other account.\""
                      ]
                    },
                    {
                      text: "The attacker wasn't interested in your other accounts.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator reviews the automated tooling used.",
                        "\"These tools don't pick and choose - they try everything they can.\""
                      ],
                      explanation: [
                        "\"Automated attack tools typically test every account they can find for a match, without any preference.\"",
                        "\"The attempt stopped because it failed, not because of a lack of interest.\""
                      ]
                    },
                    {
                      text: "Two-factor authentication on your email blocked the login attempt.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks your email account's security settings.",
                        "\"Worth checking - but that's not actually what happened.\""
                      ],
                      explanation: [
                        "\"You don't currently have two-factor authentication enabled on that account.\"",
                        "\"It wasn't needed here, because the password itself was already wrong. Turning it on would still be a good idea, as an extra layer for the future.\""
                      ]
                    }
                  ]
                },
                {
                  title: "Case File #3 - What Actually Stopped It",
                  evidence: [
                    "The password used at your bank was unique, generated for that account alone",
                    "It never appeared in any known leaked database",
                    "No other account of yours shared it"
                  ],
                  question: "Looking at the full picture, what was the single decision that made the difference?",
                  options: [
                    {
                      text: "Choosing a unique password for the account, separate from everything else you use.",
                      correct: true,
                      investigatorResponse: [
                        "The investigator closes the report.",
                        "\"That's the whole case, really.\""
                      ],
                      explanation: [
                        "\"A strong password matters, but uniqueness is what actually mattered in this case.\"",
                        "\"Even a very strong password becomes worthless the moment it's leaked from somewhere else and reused. A unique one simply has nowhere else to be leaked from.\""
                      ]
                    },
                    {
                      text: "Simply being lucky that no one targeted you specifically.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator gestures at the volume of attempts logged across the bank's systems that week.",
                        "\"Luck isn't really part of this picture.\""
                      ],
                      explanation: [
                        "\"Thousands of accounts are tested by tools like this every single day, yours included. You were targeted - the attempt simply failed.\""
                      ]
                    },
                    {
                      text: "The bank noticing the attempt before it caused harm.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator points to the order of events.",
                        "\"Close, but the order matters here.\""
                      ],
                      explanation: [
                        "\"The bank's system logged the attempt only because it failed - it wasn't a case of catching something already in progress.\"",
                        "\"The real protection happened earlier, the moment you chose not to reuse that password in the first place.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lays out the same three-account picture as any other case - email, bank, workplace - but this time, every line stops after a single step.",
                "\"This is what it looks like when the chain never gets a chance to start,\" they say.",
                "\"Let's walk through it.\""
              ],
              timeline: [
                {
                  time: "Years earlier",
                  story: [
                    "You create an account at an online retailer for a single purchase, using an old password you used to reuse everywhere.",
                    "You forget about it almost immediately."
                  ]
                },
                {
                  time: "The original breach",
                  story: [
                    "The retailer suffers a data breach. Your email and old password are among millions exposed.",
                    "It barely makes the news. You never hear about it."
                  ]
                },
                {
                  time: "In between",
                  story: [
                    "At some point before any of this, you'd already started using unique passwords and a password manager for your important accounts, including your email.",
                    "It wasn't in direct response to anything - you just decided it was worth doing."
                  ]
                },
                {
                  time: "Weeks later",
                  story: [
                    "The leaked data is sold on and tested automatically against email and banking providers, yours included."
                  ]
                },
                {
                  time: "The attempt",
                  story: [
                    "Your email login fails - the leaked password no longer matches.",
                    "Your bank login fails - it was never the same password to begin with.",
                    "The attempt stops there. There's nothing left to try."
                  ]
                },
                {
                  time: "Investigation conclusion",
                  story: [
                    "The breach reached you. It just never reached anything that mattered.",
                    "One unique password was the entire difference between a three-week ordeal and a single blocked login you almost didn't hear about."
                  ]
                }
              ],
              lesson: [
                "The investigator closes the laptop.",
                "\"I want to leave you with the same thing I tell everyone in your position, because it's easy to feel like this was overkill.\"",
                "\"It wasn't. This is what it's supposed to look like when it works.\"",
                "\"Your email account is the master key to almost everything else you own online - protect that one especially.\"",
                "\"A password manager makes using a unique password for everything nearly effortless once it's set up.\"",
                "\"Add two-factor authentication on top, and even a leaked password on its own usually isn't enough to get in.\"",
                "\"You'll probably never know how many attempts like this get quietly blocked over the years. That's kind of the point.\""
              ]
            }
          }
        ]
      }
    ]
  }
};

window.scenarios = window.scenarios || [];
window.scenarios.push(adultPasswordCase);
