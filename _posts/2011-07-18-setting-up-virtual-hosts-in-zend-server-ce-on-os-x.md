---
title: Setting Up Virtual Hosts in Zend Server CE on OS X
date:  2011-07-19 00:40:19
categories:
- Mac
- PHP
- Website
tags:
- Apple
- CodeIgniter
- Mac
- PHP
- Tips & Tricks
- Website
---

What is a virtual host? Virtual hosting is a method for hosting multiple domain names on a computer using a single IP address. Shared hosting uses this same method for all of the sites they host. Aren't those URLs you use in Zend Server getting pretty ugly? Would you like to change http://localhost/my/awesome/website into http://www.super-awesome.local You can!

Last time we talked about general Zend Server setup. This time, we will be going through setting up virtual hosts on your local machine. This again will involve Terminal.

This assumes you have Zend Server set up and running. If it is not, [go here]({% post_url 2011-07-16-installing-zend-server-ce-on-os-x-a-guide-for-the-terminal-timid %}).

1.  Open Terminal. Terminal can be found at /Applications/Utilities/Terminal.app
    You can also open it from Spotlight by typing "Terminal"

2.  We are going to edit our httpd.conf file. In Terminal type:  
    {% highlight bash linenos %}
    $ sudo vi /usr/local/zend/apache2/conf/httpd.conf
    {% endhighlight %}
    Enter your password if prompted

3.  Use the up, down, left, right arrow keys to scroll down to where you see:  
    {% highlight text linenos %}
    # Virtual hosts
    #Include conf/extra/httpd-vhosts.conf
    {% endhighlight %}

4.  In Terminal press "i". This will take you into edit mode to edit the file.

5.  Remove the "#" before "Include". It should look like this now:
    {% highlight text linenos %}
    # Virtual hosts
    Include conf/extra/httpd-vhosts.conf
    {% endhighlight %}

6.  Press the escape key to exit out of edit mode. Press ":x" to save your changes.

7.  Now we are going to edit our httpd-vhosts.conf file. In Terminal type:  
    {% highlight bash linenos %}
    $ sudo vi /usr/local/zend/apache2/conf/extra/httpd-vhosts.conf
    {% endhighlight %}

    Enter your password when prompted

8.  In Terminal press "i" to go into edit mode.

9.  Use the up, down, left, right arrow keys to scroll down to where you see:  
    {% highlight text linenos %}
    NameVirtualHost *:10088
    {% endhighlight %}

    In the previous tutorial we change the port to 80. So now we have to change this line to read:  
    {% highlight text linenos %}
    NameVirtualHost *:80
    {% endhighlight %}

10. Let's say you want to have a local virtual host for http://www.super-awesome.local that needs to be pointed at the /Users/YOUR_USERNAME/Sites/super-awesome directory. We need to add the following to the httpd-vhosts.conf file:  
    {% highlight text linenos %}
    <VirtualHost *:80>
        DocumentRoot "/Users/YOUR_USERNAME/Sites/super-awesome"
        ServerName www.super-awesome.local
        ServerAlias super-awesome.local
    </VirtualHost>
    {% endhighlight %}
    * Note: .local is just what I picked. You can change that to .dev or .blah or whatever you like. Try to stay away from common domain extensions like .com or .net. And, yes, you can end it with more than one extension like .foo.bar

11. Press the escape key to exit out of edit mode. Press ":x" to save your changes.

12. It's probably a good idea to make sure we didn't mess up syntax or spelling. In Terminal type:  
    {% highlight bash linenos %}
    $ sudo apachectl configtest
    $ sudo apachectl graceful
    {% endhighlight %}

    Enter your password if prompted
    If there are any errors they will be displayed to you. Repeat steps 10 and 11 as many times as needed.

13. Let's go ahead and restart Zend Server so it can get the changes. In Terminal type:  
    {% highlight bash linenos %}
    $ sudo /usr/local/zend/bin/zendctl.sh restart
    {% endhighlight %}

    Enter your password if prompted

14. Browse to either http://www.super-awesome.local or http://super-awesome.local and your site should display
