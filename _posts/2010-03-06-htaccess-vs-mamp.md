---
title: .htaccess vs. MAMP
date:  2010-03-06 22:13:58
categories:
  - Mac
  - PHP
  - Website
tags:
  - CodeIgniter
  - Mac
  - Tips & Tricks
  - Website
  - WordPress
---

This took me three days to figure out so hopefully this saves someone else a little bit of time.

The most common use of .htaccess files is removing file extensions, such as *index.php*, from a website URL. They are much ore powerful than that though. I'm not going to go into the details about what .htaccess files can do, shouldn't be used for, best practices, or anything else like that. I'm going to show you how to get .htaccess files set up and working with MAMP.

<img class="size-full wp-image-726 alignleft" title="MAMP" src="/assets/images/posts/2010/03/mamp_logo.png" alt="" width="80" height="80" />The only requirements are that you have a Mac (that's the first 'M' in MAMP) and the <a href="http://www.mamp.info" target="_blank">MAMP software</a> already installed. I am using the latest version. MAMP will install everything else you need (Apache, MySQL, and PHP which is 'AMP' in MAMP) to get up and running so you can start making your own sites locally.

First and foremost, the location of your website files in MAMP need to go in */Applications/MAMP/htdocs/* That may sound like common sense but that's what took the longest for me to figure out. I had my files in */Applications/MAMP/bin/mamp/* which is where all of the files for the start page is located. I just made a folder inside there and was going to the site at http://localhost:8888/MAMP/*myfolder* No matter what I did, the .htaccess file would not work at all from within that directory. So make sure your websites files are in */Applications/MAMP/htdocs/* or a folder within.

<img class="size-full wp-image-725 alignleft" title="Hidden Files Widget" src="/assets/images/posts/2010/03/hidden_files_widget.png" alt="" width="100" height="67" />The next thing you need to know is 'htaccess' isn't the file extension and there isn't a file name on the file. The dot at the front typically means it is a hidden file on Unix based operating systems (which the Mac is). So you will need to show the hidden files on your machine. There are a few ways to do this. One of the easiest ways is to use a Dashboard widget. <a href="http://www.apple.com/downloads/dashboard/developer/hiddenfiles.html" target="_blank">Hidden Files Widget</a> is a great widget for this. If the hidden files are hidden, the button will say 'Show'. If the hidden files are visible, the button will say 'Hide'. It can't get any more simple that that. Install the widget then click the 'Show' button. Sometimes the desktop icons won't come back automatically. If they don't come back after a minute, click on the Finder icon in the dock and they should come back. Now, go to wherever your website files are located. If there is a .htaccess file in the folder, skip the next paragraph. If it is not there, read the next paragraph.

Here is the catch. It's tough to create a .htaccess file because the Mac thinks 'htaccess' is the file extension but you didn't give the file a name. So it won't just let you do it. WordPress creates a .htaccess file for you when you set up a blog locally. I believe Drupal does the same thing but I'm not 100% positive on that. Other applications possibly do as well. If you aren't installing a CMS like that, you can always <a href="http://www.htaccesseditor.com/" target="_blank">create a custom one and download it</a>. Below is a very basic example of a .htaccess file that I typically use. Once you have a .htaccess file, put it in the root of where your website will live.

The .htaccess file can be opened with TextEdit. You can open it with Dreamweaver or almost anything you want. Here is an example of a typical .htaccess file

{% highlight text linenos %}
# BEGIN My_Website
<IfModule mod_rewrite.c>
  RewriteEngine On
  #RewriteBase /
  RewriteBase /mywebsite/
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.php [L]
  #RewriteRule ^(.*)$ /index.php/$1 [L]
</IfModule>
# END My_Website
{% endhighlight %}

The hash marks (#) are comments. I'll talk a little about the second and third comments in a second.

If you are developing a site locally, your files may not be in the root of the */Applications/MAMP/htdocs/* folder since you may be working on more than one website. That is what the *RewriteBase* is for. It specifies where the root of your website is in accordance with the root of the domain or local root. In this example, my website and it's files are in a folder called *mywebsite* which is inside my */Applications/MAMP/htdocs/* folder. Since */Applications/MAMP/htdocs/* is my root folder, I don't have to put that in the path. I just have to put the path from the root folder. If you notice, on the line above that (line 4), I have commented out that line with a hash. When you upload the files to your website, uncomment this line (line 4) and comment out the line after it (line 5). That way the .htaccess file works when you get it on the actual site. If you are not uploading the files to the root of your website, set the path accordingly.

The third comment (line 9) is a variation of the line above it (line 8). Both work pretty much the same. You don't have to have the first and last comment lines. You can delete them and it won't effect anything.

That is literally all I had to do to get the site working. I saw sites that wanted me to edit httpd.conf files and php.ini files and all kinds of files under the sun. I didn't have to though. If you do need to mess with those files, there are a couple pretty good walk through to help you out <a href="http://objectmix.com/apache/675017-htaccess-files-mac-mamp.html" target="_blank">here</a> and <a href="http://rexselin.wordpress.com/2006/07/28/making-mod-rewrite-and-htaccess-work-on-mac-os-x/" target="_blank">here</a>.
