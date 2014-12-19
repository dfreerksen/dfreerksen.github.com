---
title: Sending email in Codeigniter with mail protocol
date:  2011-02-10 02:55:17
categories:
  - CodeIgniter
  - PHP
tags:
  - CodeIgniter
  - PHP
  - Tips & Tricks
---

At work the other day I had to use the Email library in Codeigniter for the first time. The Email library is actually pretty great. Simple, yet powerful.

The emails that needed to be sent out needed to bcc about 20 or more different people. On my local machine I built out all of the code. I was using the sendmail protocol. Everything worked perfectly, even though I only used the "bcc" function instead of the "to" function.

Once I uploaded the files to the server, I found out I couldn't use the sendmail protocol. I had to use the mail protocol instead. That's when I started getting errors. When using the sendmail protocol, it's perfectly happy being sent an array of "bcc" emails without a "to" email address. However, the mail protocol needed a "to" email address in order to work. So I ended up using the "from" email as the "to" email also and then passing the array of "bcc" emails like i was before.

Hopefully this helps someone else.
