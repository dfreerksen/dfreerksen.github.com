---
title: Script != InvalidTag
date:  2009-05-04 19:54:50
categories:
  - Coldfusion
tags:
  - Mango Blog
  - Website
---

I started putting a bunch of my source code in the labs section of the blog. What I started out doing was providing a link to click on to see the demo. From there you could right click and get the source. What I decided was better was to have the demo on the page which you would be able to right click and view source.

The problem I was running into was the "script" tags were getting converted to "InvalidTag" after I submitted the form. So a simple tag like <script type="text/javascript"> would be converted to <InvalidTag type="text/javascript">

At first I thought it was Mango Blog that was at fault. It turns out Coldfusion was the one to blame. It's called Global Script Protection. It's in place starting with I think Coldfusion MX 7. It was created as a way to help prevent SQL injection. In Coldfusion Administrator, by default, it is set to "all" which means that script, embed, and I believe, object tags get converted to "InvalidTag."

Unfortunately my website is on a shared hosting server. So changing the Global Script Protection wasn't an option. I love Adobe! They even put a way to change the Global Script Protection inside the code.

In the cfapplication tag there is a property called scriptProtect. By default it is "all" This can be changed to "none" to disable it completely. You can also set it to a comma separated list of variables to look at like "url, form, cookie"

So for the purposes of Mango Blog in the Application.cfc file in the administration area I added scriptProtect='url, cookie' and I am able to post Javascript now. Comments still won't be able to use Javascript because I only did this for the administration area.
