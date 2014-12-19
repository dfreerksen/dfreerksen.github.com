---
title: How To Resolve MySQL Not Starting In MAMP
date:  2010-05-24 20:56:46
categories:
  - Mac
  - PHP
tags:
  - Apple Software
  - Mac
  - PHP
  - Software
  - Tips & Tricks
---

I use MAMP daily. I love MAMP. I recently discovered how truly awesome MAMP Pro is too. But that's a story for another time. I recently upgraded from MAMP 1.8.4 to 1.9. When I got MAMP 1.9 installed I started the servers. Apache came up but MySQL didn't want to. I tried shutting down both servers and starting it back up again, which didn't work.

Thankfully, there is a pretty simple fix. To begin with, make sure MAMP is shut down. Next, open Terminal. To open Terminal either open Spotlight (Cmd+Space) and type "terminal" or you can find Terminal in the /Applications/Utilities/ folder.

Once you get Terminal opened, type the following:

{% highlight bash linenos %}
$ ps aux | grep mysql 
$ lsof -i 
$ killall -9 mysqld
{% endhighlight %}

That's it. Start up MAMP and MySQL will come back up just like normal. Another option would be to simply change the port number MySQL is using in MAMP. Restarting your computer may work too but I did't try that.

[Edit May 5, 2012] Very, very late response to a couple of the comments. If this isn't working for you, you may have to use sudo. In Terminal, type "sudo killall -9 mysqld" (without the quotes). This will allow you to kill the mysqld process with security privileges of another users (such as root).
