---
title: Cross Browser Support for inline-block in CSS
date:  2011-09-18 00:44:17
categories:
- CSS
- IE
tags:
- CSS
- IE
- Internet Explorer
- Tips & Tricks
---

I've been using this method for cross browser inline-block displays for a while and thought everyone else knew about it too. One of my co-workers was shocked to find out they had been doing it wrong for so long. So I thought I would share it in case someone else didn't know about it.

Inline-block is very powerful. It is very useful for horizontal lists and even makes vertical alignment work properly. Unfortunately, it's supported pretty poorly. \*cough\*Internet Explorer\*cough\*

Older versions of Firefox support inline-block with a special "-moz" tag. But not the one you think. It uses '-moz-inline-stack' instead of '-moz-inline-block'. And when I say older versions I mean anything before version 4 I believe. So really, you don't have to add it if you don't want to. I don't. But if you keep it, make sure 'display:-moz-inline-stack' comes BEFORE 'display:inline-block' so newer versions of Firefox can use the standard style.

IE supports inline-block, but only for elements that are natively inline, such as span and strong. When 'zoom: 1' is set, it triggers hasLayout and magically IE supports inline-block. The *property is an IE hack that does not get run for non-IE browsers.

So, without further adieus, cross-browser inline-block support:

{% highlight css linenos %}
.myStyle {
    display: -moz-inline-stack;  /* optional */
    display: inline-block;
    zoom: 1;  /* triggers hasLayout for IE */
    *display: inline;  /* target IE7 only */
}
{% endhighlight %}
