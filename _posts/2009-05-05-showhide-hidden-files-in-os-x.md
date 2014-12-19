---
title: Show/Hide Hidden Files In OS X
date:  2009-05-05 07:56:58
categories:
  - Mac
tags:
  - Apple
  - Mac
---

I come from a PC background. I've used Windows all my life. I used Mac every once in a while in college but for the most part I've stuck with Windows. I finally switched over to Mac 5 months ago after having so many problems with Vista that I just couldn't take it any more.

I've slowly but surely been learning the ins and outs of the Mac. I gotta say I love it though.

One thing that is very important to me is being able to see hidden files. By default, even on Windows, the OS hides files that most people won't need or shouldn't touch. This issue came up when I copied some files and folder from my PC to my Mac. I couldn't add the files to subversion because there was already a subversion folder there, it was just hidden. So I needed to delete it but I couldn't get to it.

There are programs out there that you can download that allows you to hide and show hidden files. If you want, you can go in that direction. However, using this method, you won't need to install anything at all. All you have to do is create two simple plugins for Finder.

1.  Open Automator. On OS X 10.5 Automator is located in Applications\Automator.app

2.  If you get a window asking you "Select a starting point to open a new workflow", select the "Custom" icon and click "Choose".

3.  On the left you will see the Library with a list of items below it. Line starts out as Calendar, Contacts, Documents, File & Folders... Above it you will see "Actions", "Variables", and then a search box. In the search box type "run". It will find everything that has the word "run" in it.

    <img class="size-full wp-image-278" title="Automator" src="/assets/images/posts/2009/09/automator_runshellscript.png" alt="Automator" width="394" height="277" />

4.  Double click "Run Shell Script". This will bring up a new window on the right.

5.  In the text area, copy/paste the following:
    {% highlight bash linenos %}
    $ defaults write com.apple.finder AppleShowAllFiles TRUE  
    $ killall Finder
    {% endhighlight %}

    <img class="size-full wp-image-276" title="Automator" src="/assets/images/posts/2009/09/automator_code.png" alt="Automator" width="561" height="184" />

6.  Go to File -> Save As Plug-In. Name it "Show Hidden Files" or something just as descriptive.

7.  In the text area, copy/paste the following:
    {% highlight bash linenos %}
    $ defaults write com.apple.finder AppleShowAllFiles FALSE  
    $ killall Finder
    {% endhighlight %}

8.  Go to File -> Save As Plug-In. Name it "Hide Hidden Files" or something just as descriptive.

9.  At this time you can close Automator.

10.  Right click on the desktop. Go to More -> Automator. You now have two additional options. Choose the appropriate option at any time.

     I would recommend showing hidden files only when you need them.

\*UPDATE 10/10/08\*  
I also found a program called <a href="http://www.macupdate.com/info.php/id/26729" target="_blank">Houdini</a> which is pretty good too. It also allows you to create hidden files and folder as well.

One thing that is very important to me is being able to see hidden files. By default, even on Windows, the OS hides files that most people won't need or shouldn't touch. This issue came up when I copied some files and folder from my PC to my Mac. I couldn't add the files to subversion because there was already a subversion folder there, it was just hidden. So I needed to delete it but I couldn't get to it.

There are programs out there that you can download that allows you to hide and show hidden files. If you want, you can go in that direction. However, using this method, you won't need to install anything at all. All you have to do is create two simple plugins for Finder.
