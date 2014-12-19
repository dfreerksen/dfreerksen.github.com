---
title: JavaScript Random Between Function
date:  2009-06-14 12:39:14
categories:
  - Javascript
tags:
  - Javascript
---

Generally random number functions pick a number between 0 and another number. Every couple of months I run into a case where I need to pick a random number between two numbers. For example I need a random number between 5 and 10. I always seems to have a tough time finding one online for some reason so I am posting this in the hopes it will help someone else or even me when I need to use it again later.

This function also allows you to specify the decimal places for your random number.

{% highlight javascript linenos %}
function randomBetween(minV, maxV, floatV) 
  var randV = minV + (Math.random() * (maxV - minV));
  return typeof floatV == 'undefined' ? Math.round(randV) : rand.toFixed(floatV);
}
{% endhighlight %}

You can use something similar with Flash as well. I have a class that extends the Math class but I haven't uploaded it yet.
