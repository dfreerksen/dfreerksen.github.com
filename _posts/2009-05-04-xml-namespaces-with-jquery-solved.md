---
title: XML Namespaces With jQuery (Solved)
date:  2009-05-04 07:52:50
categories:
  - jQuery
tags:
  - Chrome
  - Firefox
  - IE
  - Internet Explorer
  - Javascript
  - jQuery
  - Safari
---

If you have come to this post, you are in the same situation I was in. Many Javascript/AJAX framesworks like <a href="http://jquery.com" target="_blank">jQuery</a> do not work with XML namespaces. I came upon an instance at work where I needed to display data from an RSS feed from <a href="http://creator.zoho.com/" target="_blank">Zoho Creator</a>. Part of the problem was some of the nodes had default namespaces and others had custom namespaces. I needed to access the data in the custom namespaces and it just wouldn't work in Firefox or IE. It worked just fine in Safari.

This is a sample output of the RSS feed from Zoho with the data replaced with dots:

{% highlight xml linenos %}
<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:zc="http://creator.zoho.com/rss/">
  <channel>
    <title>...</title>
    <link>...</link>
    ...
    <item>
      <title>...</title>
      <link>...link>
      <description>...</description>
      <guid isPermaLink="true">...</guid>
      <zc:image>...</zc:image>
      <zc:location>...</zc:location>
      <zc:startdate>...</zc:startdate>
      <zc:enddate>...</zc:enddate>
    </item>
    ...
  </channel>
</rss>
{% endhighlight %}

What I was doing with jQuery was looping over the "item" nodes using the jQuery <span style="font-style: italic;">each()</span> method as such:

{% highlight javascript linenos %}
var items = $(data).find("item");
jQuery.each(items, function(i)
{
  alert($(this).find("location").text())
});
{% endhighlight %}

The problem was that this only worked in Safari. In Firefox and IE nothing was returned. Firefox and IE don't like the custom namespaces. The only way I have found to get this to work is to use this method:

{% highlight javascript linenos %}
var items = $(data).find("item");
jQuery.each(items, function(i)
{
  alert($(this).find("[@nodeName=zc:location]").text())
});
{% endhighlight %}
