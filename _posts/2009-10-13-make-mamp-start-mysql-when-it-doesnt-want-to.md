---
title: Make MAMP Start MySQL When It Doesn't Want To
date:  2009-10-14 04:59:02
categories:
  - Mac
  - PHP
tags:
  - Mac
  - Software
  - Tips & Tricks
---

I am using MAMP for local PHP development. It's alright. It has a tendency to not want to cooperate sometimes. Like this morning. I loaded up MAMP and Apache started just fine but MySQL didn't want to do anything.

If you are getting an error similar to "Error: Could not connect to MySQL server!", rather than having to reinstall MAMP (which sometimes doesn't work), here's a fix:

1.  Quit MAMP
2.  Open Terminal (Applications/Utilities/Terminal.app)
3.  Type "killall -9 mysqld" (without the quotes)
4.  Start MAMP

It should be working now. If not, you may have to sudo the command ("sudo killall -9 mysqld")

Another option is to go to Appliacations/MAMP/db/mysql/ and delete anything is is NOT a folder. I didn't have to use this option so I can't vouch for it myself. According to forum postings it works though.

[Edit May 5, 2012] Very, very late response to a couple of the comments. If this isn't working for you, you may have to use sudo. In Terminal, type "sudo killall -9 mysqld" (without the quotes). This will allow you to kill the mysqld process with security privileges of another users (such as root).
