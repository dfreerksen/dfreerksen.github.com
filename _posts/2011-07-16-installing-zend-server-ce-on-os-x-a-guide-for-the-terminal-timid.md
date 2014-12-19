---
title: 'Installing Zend Server CE on OS X: A Guide For the Terminal Timid'
date:  2011-07-16 17:29:56
categories:
- Mac
- PHP
- Projects
- Work
tags:
- Apple
- Mac
- PHP
- Tips & Tricks
---

I use <a href="http://mamp.info/" title="MAMP Pro" target="_blank">MAMP Pro</a> both at home and at work for development. It quick, it's easy and I really don't have to fiddle with it a lot after it is set up. It's perfect for me.

At work we have a project to be built with <a href="http://www.codeigniter.com/" title="Codeigniter" target="_blank">Codeigniter</a> sitting on a Linux machine but we wanted to use Microsoft SQL Server on a different machine as the database. Turns out, it's not a simple as changing the database type in Codeigniter to "mssql" to get it up and running. If this is all you do, you get the dreaded white screen. You need a PHP extension to do it. Problem is, Microsoft only makes this PHP extension for Windows. There are a lot of tutorials out there on how to build the extension yourself on Mac or Linux machine (<a href="http://www.dotvoid.com/2010/01/adding-support-for-ms-sql-server-to-php-in-linux/" target="_blank">this site for example</a>), but none seemed to work for me.

Instead of setting up a Windows virtual machine and being forced into developing that way, I decided to install Zend Server CE. Zend comes with a MSSQL extension, it just needs to be enabled.

This tutorial does include Terminal work. I am going to walk through step-by-step, so even if you are not comfortable with Terminal, you will be up and running with Zend Server CE in no time. The only requirement is you are running an Intel Mac OS X.

1.  <a href="http://www.zend.com/en/products/server-ce/index" title="Zend Server CE" target="_blank">Download Zend Server CE</a>. CE (Community Edition) is free.

2.  Install Zend Server CE like you would any other application. You can optionally drop/drop Zend Controller.app into your applications directory if you want.

    Once installed, in your applications directory, open ZendServer.app. This will open a browser window. Go through the three steps. Congratulations! You have Zend Server CE set up and running. But we aren't done yet.

    By default, the root folder of your Zend Server is at /usr/local/zend/htdocs. Since /usr is a hidden directory, it's not easily accessible.

    But first...

3.  Open Terminal. Terminal can be found at /Applications/Utilities/Terminal.app

    You can also open it from Spotlight by typing "Terminal"

4.  OS X comes with Apache already installed. We don't want to use that version. We want to use the Zend Server version.

    In Terminal type:  
    {% highlight bash linenos %}
    $ sudo /usr/local/zend/bin/zendctl.sh stop
    {% endhighlight %}

    To stop Zend Server. Then type:  
    {% highlight bash linenos %}
    $ sudo apachectl stop
    {% endhighlight %}

    Enter your password if prompted

5.  We need to move apachectl to a safe place, such as your home directory. In Terminal type:  
    {% highlight bash linenos %}
    $ cd /usr/sbin/
    $ sudo mv apachectl ~
    {% endhighlight %}

6.  Then create a symbolic link to Zend Server's apachectl. In Terminal type:  
    {% highlight bash linenos %}
    $ sudo ln -s /usr/local/zend/apache2/bin/apachectl ./
    {% endhighlight %}

7.  Start Zend Server's Apache. In Terminal type:
    {% highlight bash linenos %}
    $ sudo apachectl sta
    {% endhighlight %}

    You should then see:  
    {% highlight bash linenos %}
    $ /usr/sbin/apachectl start [OK]
    {% endhighlight %}

8.  If you go to http://localhost/ in your browser, you will either get a forbidden or a 404 message. We'll change that next.

9.  Zend Studio's Apache comes preconfigured to use port 10088. Let's change this to port 80 like the default Apache port uses.

    Now we are getting into <a href="http://en.wikipedia.org/wiki/Vi" target="_blank">vi</a> editing. I think this scares a lot of people. But don't worry. It's very simple.

    We are going to edit our httpd.conf file. In Terminal type:  
    {% highlight bash linenos %}
    $ sudo vi /usr/local/zend/apache2/conf/httpd.conf
    {% endhighlight %}

    Enter your password when prompted

10. You are in vi edit mode so you won't be able to type in Terminal like you normally would. Typing only gives you the the OS X bump sound. That's normal. You can use the up, down, left, right arrow keys.

    Look for the line that says "Listen 10088"

    In Terminal, type "i" to go into edit mode to start editing the file. At the bottom of the Terminal window it will say "- INSERT -" to notify you that you are editing the file.

11. With your blinker over the "L" on "Listen", type "#" to comment out that line

    Use the down arrow to go to the next line.

    Type:
    {% highlight text linenos %}
    Listen 80
    {% endhighlight %}

12. Since we are already editing this file, we will go ahead and change our root directory since, as I mentioned earlier, the /usr directory is a hidden directory.

    Use the down arrow to scroll down to where it says  
    {% highlight text linenos %}
    DocumentRoot "/usr/local/zend/apache2/htdocs"
    {% endhighlight %}

    With your blinker over the "D" on "DocumentRoot", type "#" to comment out that line

    Use the down arrow to go to the next line.

    Type:  
    {% highlight text linenos %}
    DocumentRoot "/Users/YOUR_USERNAME/Sites"
    {% endhighlight %}

    This is the default web root for OS X sites. This is a pretty good place to put out root as well.

13. Use the down arrow again to scroll down to where it says  
    {% highlight text linenos %}
    <Directory "/usr/local/zend/apache2/htdocs">
    {% endhighlight %}

    With your blinker over the "<", type "#" to comment out that line

    Use the down arrow to go to the next line.

    Type:  
    {% highlight text linenos %}
    <Directory "/Users/YOUR_USERNAME/Sites">
    {% endhighlight %}

    *   We are done editing this file. Now we need to save it. In Terminal, hit the escape key to edit out of editing mode. The "- INSERT -" at the bottom will go away.

        In Terminal again, type ":x". This exits vi mode and saves what you changed

    *   Restart apachectl type typing:  
        {% highlight bash linenos %}
        $ sudo apachectl restart
        {% endhighlight %}

        Enter your password when prompted

    *   If you go to http://localhost/ in your browser, you will see the default Mac OS X homepage now.

    *   To configure Zend Framework, type:  
        {% highlight bash linenos %}
        $ sudo ln -s /usr/local/zend/share/ZendFramework/bin/zf.sh ./zf
        {% endhighlight %}

        *   To Configure Pear, type  
        {% highlight bash linenos %}
        $ sudo ln -s /usr/local/zend/bin/pear ./
        $ sudo pear upgrade
        {% endhighlight %}

        *   Now we have to configure MySQL. In terminal type:  
            {% highlight bash linenos %}
            $ sudo ln -s /usr/local/zend/mysql/bin/mysql ./
            $ sudo ln -s /usr/local/zend/mysql/bin/mysqladmi
            {% endhighlight %}

        *   We have to edit some settings in my.cnf for MySQL, so we go back to vi. In Terminal, type:  
            {% highlight bash linenos %}
            $ sudo vi /usr/local/zend/mysql/data/my.cnf
            {% endhighlight %}

            To edit the file, it is similar to what you did in step 10.

            Use the down arrow to scroll down to where it says:  
            {% highlight text linenos %}
            socket = /usr/local/zend/mysql/tmp/mysql.sock
            {% endhighlight %}

            With your blinker over the "s" on "socket", type "#" to comment out that line

            Use the down arrow to go to the next line.

            Type:  
            {% highlight text linenos %}
            socket = /tmp/mysql.sock
            {% endhighlight %}

        *   By default, the password that comes with Zend Server is blank. You can change this by removing the "#" next to "password" and then changing "you_password" to whatever you want. Make sure you remember what the password is though.

        *   To save the file, it is similar to what you did in step 14.

        *   Configure phpMyAdmin. Since we changed the web root for Apache, we will have to create a Directory entry and Alias for phpMyAdmin, since it exists somewhere else. To edit the httpd.conf file again, in Terminal type:  
            {% highlight bash linenos %}
            $ sudo vi /usr/local/zend/apache2/conf/httpd.conf
            {% endhighlight %}

            Enter your password when prompted

        *   To start editing the file, use similar steps from step 10.

            Somewhere in the file (I put it at the very end), type:  
            {% highlight text linenos %}
            Alias /phpMyAdmin /usr/local/zend/share/phpmyadmin
            <Directory "/usr/local/zend/share/phpmyadmin">
                Options Indexes FollowSymLinks
                AllowOverride All
                Order allow,deny
                Allow from all
            </Directory>
            {% endhighlight %}

            * Hint: Yes, you can copy/paste this if you don't want to type it all out yourself.

            To save the file, use similar steps from step 14.

        *   Go ahead and restart Zend Server. In Terminal, type:
            {% highlight bash linenos %}
            $ sudo /usr/local/zend/bin/zendctl.sh restart
            {% endhighlight %}


### Where do I put the file for my website(s)?

Files will be places in ~/Sites

Yes, of course you can create directories within that folder.


### What is the URL for my site?

The root of your site is now at <a href="http://localhost/" target="_blank">http://localhost/</a> If you have a directory within the ~/Sites directory, the URL would become http://localhost/FOLDER\_NAME

To configure Zend Server, you can get to it by going to <a href="http://localhost:10081/ZendServer/" target="_blank">http://localhost:10081/ZendServer/</a> or simply by opening ZendServer.app

phpMyAdmin is located at <a href="http://localhost/phpMyAdmin" target="_blank">http://localhost/phpMyAdmin</a> The default username is "zend" and the password is left blank. You can also use "root" as the username. Again, with no password.


### How do I start/stop/restart Zend Server?

To start Zend Server, in Terminal type:
{% highlight bash linenos %}
$ sudo /usr/local/zend/bin/zendctl.sh start
{% endhighlight %}

To stop Zend Server, in Terminal type:  
{% highlight bash linenos %}
$ sudo /usr/local/zend/bin/zendctl.sh s
{% endhighlight %}

To restart Zend Server, in Terminal type:
{% highlight bash linenos %}
$ sudo /usr/local/zend/bin/zendctl.sh restart
{% endhighlight %}


### Uninstalling Zend Server

1.  Open Terminal

2.  Enter
    {% highlight bash linenos %}
    $ sudo /usr/local/zend/bin/uninstall.sh
    {% endhighlight %}

    This will:
    1.  Stop all Zend Server processes
    2.  Delete all Zend Server installed files
    3.  Remove the ZendServer.app from /Applications
    4.  Remove Zend users

3.  It will ask for your password. Enter your password

4.  It will ask you if you are sure you want to remove Zend Server. Type "yes" (without the double quotes)

5.  It tells you it will a couple directories, including your MySQL databases. Type "cont" (without the double quotes) to continue

6.  In your applications directory, drag Zend Controller.app to the trash (if it is installed)
