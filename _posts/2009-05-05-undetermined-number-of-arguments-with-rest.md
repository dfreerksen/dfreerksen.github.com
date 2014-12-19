---
title: Undetermined Number of Arguments With ...rest
date:  2009-05-05 02:00:50
categories:
  - Actionscript
  - Flex
tags:
  - Actionscript
  - Flash
  - Flex
---

It's amazing how many people still don't know about ...rest. On the other hand I think I have only played with it but never actually used it. Basically what ...rest does it allows you to pass, or not pass, parameters to a function. ...rest parameters are passed just like all variables but in the function it will be an Array. Here is an example:

{% highlight actionscript linenos %}
function myFunction(required:Number, ...optionalArgs):void 
{
  trace(required); // 1
  trace(optionalArgs); // [2, 3, 4]
}
myFunction(1, 2, 3, 4);
{% endhighlight %}


The same functionality can be achieved a couple other ways. This next example you set a default value for each variables you pass. But this isn't an undetermined number of arguments.

{% highlight actionscript linenos %}
function myFunction(option1:Number=0, option2:Number=null):void
{
  trace(option1); // 1
  trace(option2); // null
}
myFunction(1);
{% endhighlight %}

Another way is similar to the way jQuery does it plugins. I don't have an example of it but you pass all of your variables that you want in an object to the function. You can have any number of items in the object. Inside the function you have default values in case the variables aren't passed. Then the variables that were passed overwrite the default values.
