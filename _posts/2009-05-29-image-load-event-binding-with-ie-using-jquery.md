---
title: Image Load Event Binding With IE Using jQuery
date:  2009-05-29 20:08:45
categories:
  - IE
  - jQuery
tags:
  - Javascript
  - jQuery
---

I ran into a strange issue today. I wrote a plugin for jQuery that used the load events from jQuery attached to an image. This plugin worked perfectly in Firefox, Safari, and Opera on PC, Mac, and Ubuntu. The only browser that it had problems with was IE.

I know. Completely unheard of right? I mean Internet Explorer is the best browser ever. Everything works perfectly in IE. (In case you didn't catch that, that was sarcasm)

What the plugin was doing was creating an image element and adding it to the DOM. Once the image was added to the DOM I added the load event to it. The problem was that IE would only see the load event maybe 10% of the time at best. The only way I could get it to work in IE was add the image element to the DOM but don't give it a src. Once the image element was added to the DOM, I created the load event listener. Once the load even was created, then I went back to the image and gave it an src.

This was an issue only on images with a smaller file size. The larger images didn't seem to have as big of an issue with it except when I was testing locally. However, even the larger images weren't consistently calling the load event.

Hopefully this helps out someone else. This drove me nuts for about an hour.
