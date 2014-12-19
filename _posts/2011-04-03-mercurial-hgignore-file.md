---
title: Mercurial .hgignore file
date:  2011-04-03 16:09:07
categories:
  - CodeIgniter
  - Mac
  - Projects
  - Windows
tags:
  - CodeIgniter
  - Mac
  - Software
  - Tips & Tricks
  - Windows
---

If you are using Mercurial, there is this handy file in your repository root called .hgignore. This is a file that keeps track of all of the files that should not be tracked by Mercurial. For example, log files or cache files should not be committed to repositories.

I do a lot of work with PHP, Codeigniter, and Eclipse on the Mac. This is what my .igignore file looks like:

{% highlight text linenos %}
application/logs/(?!index\.html|\.htaccess)  
application/cache/(?!index\.html|\.htaccess)  
syntax: glob  
.DS_Store  
*.\[Bb\]\[Aa\][Kk]  
\[Bb\]\[Aa\][Kk]  
*.[Cc]ache  
.buildpath  
.project  
.settings
{% endhighlight %}

The first two lines keep my logs and cache directories empty on commit except for the index.html and .htaccess files that are in there. .DS_Store is used by Finder. It's similar to the desktop.ini file on Windows. The last three lines are to keep my Eclipse project files out of the repo. Everything else is files and directories that I tend to call things.

If you are on Windows, instead of .DS_Store you will probably need [Tt]humbs.db as well. If you are working with Microsoft Visual Studio and .Net, you are going to need a few more things. The ones I can think of off the top of my head are:

{% highlight text linenos %}
syntax: glob  
*.suo  
*.webinfo  
[Bb]in  
*/[Bb]in  
[Rr]elease  
*/[Rr]elease  
[Dd]ebug  
*/[Dd]ebug
{% endhighlight %}

All of this will of course change depending on the IDE, preferences, and framework you are using. This will help you get started.
