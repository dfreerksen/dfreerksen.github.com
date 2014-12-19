---
title: TweenMaxVars
date:  2009-05-05 21:59:02
categories:
  - Actionscript
  - Flex
tags:
  - Actionscript
  - Flash
  - Flex
---

I just realized <a href="http://blog.greensock.com/tweenvars/" target="_blank">TweenMax</a> has been updated. Sort of anyway. First of all, if you haven't heard of TweenMax, <a href="http://blog.greensock.com/tweening-family-comparison/" target="_blank">go read about it</a>. It's an amazing Actionscript library that allows you to tween things in Flash or Flex. Big deal, Adobe has classes like that build in. Wrong! This is a hell of a lot faster. Plus as an added bonus it does bezier tweening which is amazing. Back on track. TweenMax now has an optional utilities class which would allow for code hinting and strict data typing. Like I said, it is an optional class.

Here is an example of the original way:

{% highlight actionscript linenos %}
import gs.TweenLite;
import gs.easing.*;
TweenLite.to(my_mc, 2, {x:300, y:100, ease:Elastic.easeOut, onComplete:myFunction});
{% endhighlight %}

And now the new/optional way to do it:

{% highlight actionscript linenos %}
import gs.TweenLite;
import gs.utils.tween.TweenLiteVars;
import gs.easing.*;
var v:TweenLiteVars = new TweenLiteVars();
    v.addProps(x, 300, false, y, 100, true);
    v.ease = Elastic.easeOut;
    v.onComplete = myFunction;
TweenLite.to(my_mc, 2, v);
{% endhighlight %}
