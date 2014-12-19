---
title: Run Mac OSX in 64bit
date:  2011-02-09 19:44:12
categories:
  - Mac
tags:
  - Apple
  - Cool
  - Mac
  - Tips & Tricks
---

If you are using a Mac computer, chances are, you probably aren't taking advantage of the 64bit kernel that is built in. To check if you are using 32bit or 64bit;

1.  Click on the Apple logo
2.  Click on "More Info..."
3.  When the System Profiler window opens, on the left side, click on "System"
4.  On the right side there should be an area that says "64-bit Kernel and Extensions"

If it says "no," you are running 32bit. It's easy enough to fix.

Option A  
Restart the computer, when it is booting up, hold down the 6 and the 4 keys on your keyboard. To verify is booted into 64bit, do the same steps as above.

Option B  
This required some Terminal work as well as a restart. Inside Terminal, type  
{% highlight bash linenos %}
$ sudo systemsetup -setkernelbootarchitecture x86_64
{% endhighlight %}

This will require you to restart before you can start using the 64bit kernel. To verify is booted into 64bit, do the same steps as above. In case you want to go back to 32bit, inside Terminal again, you would type  
{% highlight bash linenos %}
$ sudo systemsetup -setkernelbootarchitecture i386
{% endhighlight %}

Once again, a restart is required.

The up side is that it gives you, give or take, a 30% increase in just about everything your computer does. But be careful. Some software and drivers aren't ready for 64bit just yet.
