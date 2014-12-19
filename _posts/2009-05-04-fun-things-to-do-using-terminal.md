---
title: Fun Things To Do Using Terminal
date:  2009-05-05 02:29:55
categories:
  - Mac
tags:
  - Apple
  - Fun
  - Mac
---

Let's start off with something fun. Not only can your Mac read text files for you using something like *say -f mytextfile.txt*, but it's also fun to make it say random things. Simply type the word "say" (no quotes) and then whatever you want it to say. For example if you type *say how are you* it will say the phrase "how are you." It doesn't like apostrophes so if you want it to say "it's a nice day," you would have to type *say "it\'s a nice day*". You can also <a href="http://lifehacker.com/397141/make-your-terminal-sing" target="_blank">make Terminal sing</a>. Now choose a different voice from the Speech menu in the System Preferences.

The next one is pretty important if you make websites. By default, the debug menu is turned off in Safari. Safari's debug is pretty great actually. It opens up a lot of features for you to take advantage of. It also allows you to use *window.console.log()* which displays messages to the browser similar to the way *trace()* does for Flash. To enable the debug menu copy/paste this into Terminal:  
*defaults write com.apple.Safari IncludeDebugMenu 1*  
This will also enable Web Inspector which is another thing web developers need. It allows you to see browser error messages as well as other information about pages.

If you are one of those people that likes to see the path of the folder you are in, there is a way to display the path in the title of the Finder window. Simply copy/paste this in Terminal  
*defaults write com.apple.finder _FXShowPosixPathInTitle -bool YES*  
You may have to restart Finder or possibly restart to see the final effect.

This ones pertains to hidden files hidden files on your Mac. Many system files are hidden by default so you don't go messing with things you shouldn't be. Every now and again you need to see those hidden files though. This is similar to another post that I have done. To show hidden files on your system, copy/paste this in Terminal  
*defaults write com.apple.finder AppleShowAllFiles TRUE*  
To hide the hidden files again, replace* true* with *false*

When you take a screenshot, the default file format is png. You can change this to any common file format you want (png, gif, jpg, bmp, tif). Simply copy/paste this in Terminal  
*defaults write com.apple.screencapture type jpg*  
You may have to restart Finder or possibly restart before it takes effect.
