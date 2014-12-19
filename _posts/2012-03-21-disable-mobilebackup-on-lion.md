---
title: Disable .MobileBackup on Lion
date:  2012-03-22 04:05:27
categories:
- Mac
tags:
- Mac
---

For the last week I've been without the Internet. Let me tell you, it's killing me. Blah blah blah. Suddenly, the amount of free space I have on my hard drive went from about 200Gb to 24Gb. Turns out it is Time Machine on Lion. If Time Machine is enabled but it can't back up the the Time Machine drive, it will still back it up to your internal hard drive under a hidden .MobileBackups directory in the root of your drive. This feature is only active for laptops. It is also available for desktops, though it must be enabled.

For me, this is a bad thing since I won't have internet for another week. This feature can be disabled. Open Terminal and type (or copy/paste) the following:

{% highlight bash linenos %}
$ sudo tmutil disablelocal
{% endhighlight %}

A reboot is going to be required before this take effect.

If you ever want to re-enable it, you would open Terminal again and type:

{% highlight bash linenos %}
$ sudo tmutil enablelocal
{% endhighlight %}

Once again, a reboot is going to be required.
