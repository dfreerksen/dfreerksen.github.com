---
title: Route Everything, Except These Controllers
date:  2009-10-20 06:56:53
categories:
  - CodeIgniter
  - PHP
tags:
  - CodeIgniter
  - PHP
  - Tips & Tricks
---

I was playing with <a title="CodeIgniter" href="http://www.codeigniter.com" target="_blank">CodeIgniter</a> routing at work. I wanted to have a catch-all route but I needed to exclude a certain controller, or controllers, from that catch-all route. As an example, I wanted to have http://www.example.com/(ANYTHING) route to the "page" controller. http://www.example.com/policies/shipping would route to the "policies" controller and then to the "ship" method. From there the "page" controller would split up all of the segments.

I started out with this:

{% highlight php linenos %}
$route['policies/shipping'] = "policies/ship";
$route['(:any)'] = "page";
{% endhighlight %}

The "policies/ship" route would be caught by the "policies" controller and everything else would be caught by the "page" controller. Except the "page" controller was getting everything.

I needed to exclude certain controllers from the catch-all route. After a Google search, I came up with nothing. So I started working on it myself. Here is what I cam up with:

{% highlight php linenos %}
$route['policies/shipping'] = "policies/ship";
$route['^(?!policies|controllerA|controllerB)\S*'] = "page";
{% endhighlight %}

So far it seems to work perfectly. Hopefully this helps someone else out.
