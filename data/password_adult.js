const adultPasswordCase = {
  id: "password_adult",
  meta: {
    title: "Password Breach",
    description: "How one reused password can turn a single old leak into a banking, email, and workplace crisis.",
    difficulty: "Easy",
    ageGroup: "working-adult"
  },
  intro: [
    "It's a Tuesday evening, and you've finally sat down after a long day at work.",
    "Your new bank sent an email last week: your account is ready, and you can now manage everything online.",
    "You've been meaning to set it up for days, and tonight is the first quiet moment you've had.",
    "You open your laptop, coffee in hand, and pull up the bank's website.",
    "Direct deposits, bill payments, savings goals: it'll be nice to have it all in one place."
  ],
  setup: [
    "The signup page is straightforward. Full name. Date of birth. Address. Employer.",
    "You move through it quickly. You've done this a dozen times before for other accounts.",
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
              "You type in your usual password, the one saved in your head, not in any password manager.",
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
              "Work stays busy: deadlines, meetings, the usual.",
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
                  "Your old account, email address and password included, is bundled with millions of others and sold for a small price.",
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
              "Your email account is tested first, since it's usually the easiest to find. The password matches.",
              "The attacker is in.",
              "From inside your email, they search for anything useful: bank statements, password reset emails, your employer's name in old messages.",
              "They find your new bank's welcome email, still sitting in your inbox.",
              "They try the same password there.",
              "It matches again.",
              "Two accounts. One password. No alarms going off anywhere, because nothing was actually broken into. Every door was simply unlocked with a key that already existed."
            ]
          },
          {
            type: "text", // aftermath
            text: [
              "You wake up Friday morning to a bank notification: a login from an unfamiliar device.",
              "You dismiss it half-asleep, assuming it's your phone being weird.",
              "By the time you're at your desk, a second notification arrives: a transfer request pending approval.",
              "You never made one.",
              "Panic sets in. You try to log into your email to check for anything unusual, and can't. Your password no longer works.",
              "You call the bank first. They freeze the pending transfer just in time, but flag several smaller, already-completed transactions you don't recognize.",
              "You call your email provider next. Recovery takes most of the day: verifying your identity, proving the account is yours.",
              "Somewhere in the middle of it, a message arrives from your IT department at work: \"We noticed a login attempt on your work account from an unrecognized location. Please confirm this was you.\"",
              "It wasn't.",
              "Your stomach drops as you realize how far this has actually reached.",
              "By the end of the week, you've spent hours on the phone, changed passwords on nearly every account you can remember, and enabled two-factor authentication on all of them, something you'd always meant to do eventually.",
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
                "\"They used a password that was already sitting out in the open, because it had been reused everywhere.\"",
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
                        "\"There's exactly one login attempt on record, and it succeeded immediately.\""
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
                        "\"This was an account-level compromise, not a server-level one. The difference matters, because it means the fix is entirely in your hands.\""
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
                        "\"They tried the same password there, the one you'd already proven you reuse, and it worked immediately.\"",
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
                        "\"The connection here wasn't a technical one. It was the fact that you used the same password for both.\""
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
                        "\"The bank required a long, complex password, and that's exactly what you gave it.\"",
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
                    "IT flagged the password reset activity as coming from the same unrecognized location as the email and bank logins"
                  ],
                  question: "You never gave anyone your work password. How did the attacker reach your workplace account?",
                  options: [
                    {
                      text: "The attacker must have already known your work password from another leak.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator checks your work account's login history.",
                        "\"Actually, there's no direct login attempt on your work account at all.\""
                      ],
                      explanation: [
                        "\"Nobody ever tried logging into your work account directly.\"",
                        "\"Instead, the attacker used a completely different route: requesting a password reset through your compromised email.\"",
                        "\"They never needed your work password. They just needed to control where a new one got sent.\""
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
                        "\"The attacker didn't need to get past any corporate security. Your own email account gave them a much easier path in.\""
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
                        "\"Once the attacker controlled your email, they could request a reset for almost any account tied to it, without ever needing to guess a single other password.\"",
                        "\"This is exactly why it is important to use unique passwords, especially for important accounts.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lays out three incident reports side by side: email, bank, and workplace, each one initially reported as if it were a separate problem.",
                "\"Most people assume these are three unrelated attacks,\" they say.",
                "\"They very rarely are.\"",
                "\"Let's line up the timestamps and see how they actually connect.\""
              ],
              timeline: [
                {
                  time: "Three years earlier - Saturday, 3:26 PM",
                  story: [
                    "You create an account on a small online retailer while making a one-time purchase.",
                    "You use your usual password because it is easy to remember.",
                    "Over time, you forget about the account."
                  ]
                },
                {
                  time: "Tuesday, 8:14 PM",
                  story: [
                    "You create your new online banking account after a long day at work.",
                    "During signup, you choose the same password you already use for your email and several other accounts.",
                    "The account setup completes successfully.",
                    "For the next few weeks, everything works normally."
                  ]
                },              
                {
                  time: "Two months later - Friday, 11:42 PM",
                  story: [
                    "The retailer suffers a data breach.",
                    "Attackers steal a database containing customer information, including email addresses and passwords.",
                    "Your old password is included in the leaked data.",
                    "Nobody contacts you, and the breach receives little attention."
                  ]
                },
                {
                  time: "Three weeks later - Monday, 2:00 AM",
                  story: [
                    "Cybercriminals obtain the leaked database.",
                    "Automated tools begin testing stolen email and password combinations against popular websites.",
                    "Thousands of accounts are tested every minute.",
                    "The attackers are not searching for you specifically. They are looking for reused passwords that still work."
                  ]
                },
                {
                  time: "Monday, 2:47 AM",
                  story: [
                    "The attackers test your leaked credentials against your email account.",
                    "The password works immediately.",
                    "Your inbox is now accessible."
                  ]
                },
                {
                  time: "Monday, 2:56 AM",
                  story: [
                    "The attacker searches your emails and finds your banking welcome message.",
                    "They try the same password on your banking account.",
                    "The login succeeds.",
                    "Two important accounts are now controlled using the same password."
                  ]
                },
                {
                  time: "Monday, 3:10 AM",
                  story: [
                    "The attacker requests a password reset for your workplace account.",
                    "The recovery link is sent to your compromised email.",
                    "They now have a path into another part of your digital life."
                  ]
                },
                {
                  time: "Monday morning, 8:30 AM",
                  story: [
                    "You wake up and begin your normal routine.",
                    "You do not know that your accounts have already been accessed.",
                    "The attack has already spread further than you realise."
                  ]
                },
              ],
              finalWords: [
                "The investigator closes the report and looks back over the timeline.",
                "\"This wasn't a failure of the bank's security systems.\"",
                "\"The attacker didn't break through anything. They simply used a password that was already exposed somewhere else.\"",
                "\"One reused password turned a small forgotten breach into a problem affecting your personal, financial, and work life.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator leaves you with a few things you can do to make your everyday online life more secure.",
                  "\"This attack could have been stopped at several different points before it became a crisis.\""
                ],
                advice: [
                  {
                    title: "Use a different password for every important account",
                    text: "If one website is breached, attackers should not be able to use that same password to access your other accounts."
                  },
                  {
                    title: "Use a password manager",
                    text: "A password manager can create and store unique passwords, making it easier to stay secure without having to remember every password yourself."
                  },
                  {
                    title: "Enable two-factor authentication (2FA)",
                    text: "2FA adds another step when signing in, such as a code from your phone or an authentication app. Even if someone gets your password, they may still be blocked from accessing your account."
                  },
                  {
                    title: "Secure your email account",
                    text: "Your email is often the gateway to resetting other accounts. Protect it with a strong unique password and extra security features."
                  },
                  {
                    title: "Take security warnings seriously",
                    text: "Small reminders like using unique passwords exist because they prevent real attacks like this one."
                  }
                ]
              },
              lesson: [
                "A password can be strong and still be unsafe if it is reused.",
                "Unique passwords and extra security layers stop one breach from becoming many."
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
              "It's a small piece of friction at the end of a long day, but you decide it's worth it. This is your money, after all.",
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
                  "Your old account, email address and password included, is bundled with millions of others and sold for a small price.",
                  "You never hear about this part. Almost nobody does."
                ]
              },
              {
                time: "That same night",
                story: [
                  "Somewhere far away, automated tools begin testing the leaked list against banks, email providers, and workplace logins.",
                  "Your old email address is tested first, paired with the old password.",
                  "It doesn't match anything current. You changed your email password some time ago, after finally getting around to it."
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
                "\"This one's a nice change. Let's walk through why it didn't go anywhere.\""
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
                        "\"Nothing random about it. The system did exactly what it's designed to do.\""
                      ],
                      explanation: [
                        "\"The login was rejected because the password itself was simply wrong for this account.\"",
                        "\"There's no randomness involved. A login either matches or it doesn't.\""
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
                        "\"This wasn't an attack on the bank's infrastructure. It was someone trying to log in with a specific password.\"",
                        "\"Firewalls defend against a different kind of threat. What stopped this one was simply that the password didn't match.\""
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
                    }
                  ]
                },
                {
                  title: "Case File #2 - The Missing Map",
                  evidence: [
                    "The same leaked credentials were tried against your email account first",
                    "That login attempt also failed",
                    "No password-reset emails or account-recovery attempts were logged anywhere"
                  ],
                  question: "In cases where this succeeds, the attacker usually reaches multiple accounts within minutes. Why did it stop completely here?",
                  options: [
                    {
                      text: "Your email account acted like a locked door with no key that fit, so there was nothing to search through and nowhere else to go.",
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
                        "\"These tools don't pick and choose. They try everything they can.\""
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
                        "\"Worth checking, but that's not actually what happened.\""
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
                      text: "Simply being lucky that no one targeted you specifically.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator gestures at the volume of attempts logged across the bank's systems that week.",
                        "\"Luck isn't really part of this picture.\""
                      ],
                      explanation: [
                        "\"Thousands of accounts are tested by tools like this every single day, yours included. You were targeted. The attempt simply failed.\""
                      ]
                    },
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
                      text: "The bank noticing the attempt before it caused harm.",
                      correct: false,
                      investigatorResponse: [
                        "The investigator points to the order of events.",
                        "\"Close, but the order matters here.\""
                      ],
                      explanation: [
                        "\"The bank's system logged the attempt only because it failed. It wasn't a case of catching something already in progress.\"",
                        "\"The real protection happened earlier, the moment you chose not to reuse that password in the first place.\""
                      ]
                    }
                  ]
                }
              ],
              timelineIntro: [
                "The investigator lays out the same three-account picture as any other case, email, bank, workplace, but this time every line stops after a single step.",
                "\"This is what it looks like when the chain never gets a chance to start,\" they say.",
                "\"Let's walk through it.\""
              ],
              timeline: [              
                {
                  time: "Three years earlier - Saturday, 3:26 PM",
                  story: [
                    "You create an account on a small online retailer while making a one-time purchase.",
                    "You use an older password that you no longer use for important accounts.",
                    "Over time, you forget about the account."
                  ]
                },
                {
                  time: "Tuesday, 8:14 PM",
                  story: [
                    "You create your new online banking account after a long day at work.",
                    "Instead of reusing an old password, you create a unique password using your password manager.",
                    "The account setup completes successfully."
                  ]
                },
                {
                  time: "Two months later - Friday, 11:42 PM",
                  story: [
                    "The retailer suffers a data breach.",
                    "Attackers steal customer information, including your old email address and password.",
                    "However, the leaked password is not used anywhere important anymore."
                  ]
                },
                {
                  time: "Three weeks later - Monday, 2:00 AM",
                  story: [
                    "Cybercriminals obtain the leaked database.",
                    "Automated tools begin testing stolen credentials against popular websites.",
                    "The attackers search for accounts where old passwords still work."
                  ]
                },
                {
                  time: "Monday, 2:47 AM",
                  story: [
                    "The attackers test the leaked password against your email account.",
                    "The login fails.",
                    "Your email account uses a different password."
                  ]
                },
                {
                  time: "Monday, 2:48 AM",
                  story: [
                    "The attackers test the same leaked password against your banking account.",
                    "The login fails again.",
                    "The password was never used for your bank."
                  ]
                },
                {
                  time: "Monday, 2:49 AM",
                  story: [
                    "The automated system moves on to the next target.",
                    "There is no inbox to search.",
                    "There are no password reset emails to exploit.",
                    "The attack chain ends immediately."
                  ]
                },
                {
                  time: "Monday, 8:30 AM",
                  story: [
                    "Your bank sends a notification about a failed suspicious login attempt.",
                    "You check your account and confirm everything is secure.",
                    "The attack happened, but it never became a crisis."
                  ]
                },
              ],
              finalWords: [
                "The investigator closes the laptop.",
                "\"The attacker reached you, but the chain stopped immediately.\"",
                "\"The leaked password was real, but it could not unlock anything important.\"",
                "\"Good security is not about preventing every attack. It is about making sure one incident does not become a disaster.\""
              ],
              investigatorAdvice: {
                intro: [
                  "The investigator gives you some advice to be even more secure in your online life.",
                  "\"You made the right choice here, but security works best when you build multiple layers of protection.\""
                ],
                advice: [
                  {
                    title: "Keep using unique passwords",
                    text: "You stopped the biggest risk in this situation. Continue making sure important accounts do not share the same password."
                  },
                  {
                    title: "Use a password manager",
                    text: "Password managers help you create strong, unique passwords and store them securely so you don't need to rely on memory."
                  },
                  {
                    title: "Enable two-factor authentication (2FA)",
                    text: "2FA adds another layer of protection if your password is ever exposed. A stolen password alone should not be enough to access your account."
                  },
                  {
                    title: "Review your older accounts",
                    text: "Old accounts can still contain personal information. Remove accounts you no longer use and update passwords that may be outdated."
                  },
                  {
                    title: "Stay alert for suspicious activity",
                    text: "Security is ongoing. Watch for unusual login alerts, unexpected emails, or requests for your information."
                  }
                ]
              },
              lesson: [
                "Using unique passwords stopped this attack before it could spread.",
                "Good security practices constantly protect you from attacks, even when you don't notice them."
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
