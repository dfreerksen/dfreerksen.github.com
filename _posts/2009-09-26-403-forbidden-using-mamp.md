---
title: 403 Forbidden using MAMP
date:  2009-09-26 21:49:15
categories:
  - Misc
  - PHP
tags:
  - Mac
  - Software
  - Tips & Tricks
---

I have been playing with Codeigniter a lot lately. I was in the middle of working on something when MAMP gave me a 403 error.

The error was "403 Forbidden You don't have permission to access / on this server" Navigating to any folder would give me the 403 error as well, even http://localhost:8888/MAMP/?language=English.

This was a pretty simple issue to correct. Not simple enough at the time though

1.  Stop all MAMP servers (Apache and MySQL Server)
2.  Navigate to <span style="color: #ff0000;">Applications/MAMP/conf/apache</span>
3.  Open <span style="color: #ff0000;">httpd.conf</span>
4.  You can probably open it with TextEdit. I opened it with Dreamweaver. Just make sure TextEdit is editing it in plain text format and not rich text format.
5.  Find the following section of code (on mine it was on line 378):
    {% highlight text linenos %}
    <Directory />
      Options Indexes FollowSymLinks
      AllowOverride All
    </Directory>
    {% endhighlight %}
6.  Change "<span style="color: #ff0000;">AllowOverride All</span>" to "<span style="color: #ff0000;">AllowOverride None</span>"
7.  Save the file
8.  Start MAMP and test the pages.

If that doesn't work for you, you can always <a href="http://www.google.com/#q=mamp+403+forbidden" target="_blank">Google</a> it. The <a href="http://forum.mamp.info/index.php" target="_blank">MAMP forums</a> have a lot of posts about it.
