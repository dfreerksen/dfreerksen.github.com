---
title: How to Fix RSA Host Key Change Error on Mac
date:  2011-01-25 19:03:05
categories:
  - Mac
  - Work
tags:
  - Fedora
  - Mac
---

At work recently, we wiped a Fedora development server and reinstalled with the newer version of the OS. When everything was back up and running, I tried to connect to it through SSH. I got an error I hadn't seen before about my RSA host key is wrong.

First of all, the error I was getting is below:

<a href="/assets/images/posts/2011/01/rsa.png" rel="shadowbox"><img class="alignnone size-medium wp-image-888" title="RSA" src="/assets/images/posts/2011/01/rsa-300x228.png" alt="" width="300" height="228" /></a>  

This was actually pretty easy to fix. Since you are already trying to SSH, this assumes you already know where Terminal is and you have it opened:

1.  Inside Terminal, type 
    {% highlight bash linenos %}
    $ cd ~/.ssh
    {% endhighlight %}

2.  Inside Terminal again, type  
    {% highlight bash linenos %}
    $ rm known_hosts
    {% endhighlight %}

That's it. Your done. You can now go through SSH again. A new RSA key will be generated for you automatically. All this really did was delete a file named *known_hosts* inside the hidden ~/.ssh directory. Since it deleted the file, this also means that RSA keys for other SSH connections will be lost as well. However the next time you SSH to them, you will be given a new key automatically.
