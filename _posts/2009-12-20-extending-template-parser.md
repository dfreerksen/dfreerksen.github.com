---
title: Extending Template Parser
date:  2009-12-20 11:31:57
categories:
  - CodeIgniter
  - Work
tags:
  - CodeIgniter
  - PHP
---

I am working on some stuff for work (yes, on the weekend) that uses the Codeigniter Template Parser class to display content with pseudo variables. I have a pseudo variable parser that allows me to call up a certain function from a certain helper file. To do this I would do something similar to this:
{% highlight text linenos %}
{ns:gallery['foo']}
{% endhighlight %}

Where "df" is the name of the helper file (minus "_helper") that gets loaded in if it hasn't been already, "gallery" is the name of the function, and everything inside the brackets are values that get passed to the function.

I also thought about doing something more like HTML tags with pseudo variables. So the above example could be:
{% highlight text linenos %}
{ns:gallery name='foo'}
{% endhighlight %}

Similar concept but this way all of the attributes could be thrown into an object when it gets o the function so I can have as many or as few settings in it as I want instead of having to pass a certain number of arguments in a certain order. I would have to have default values for everything in case an attribute I needed wasn't passed. Same idea as the way HTML tags work.

This is basically like creating my own pseudo HTML tags with { and } instead of < and >. So then I thought, why not make it a namespace tag? I would just have to replace the { and } with < and > and I get:
{% highlight text linenos %}
<ns:gallery name='foo' />
{% endhighlight %}

To do this I would so something similar to this post titled '<a href="http://stackoverflow.com/questions/1201778/parsing-custom-tags-with-php" target="_blank">Parsing Custom Tags With PHP</a>'.

There are advantages and disadvantages to all three. Right now I am leaning more toward the second or third options because if someone goes in after me and needs to edit the file, I think that makes more sense than the first way. Any way I go it just means extending the Codeigniter Template Parser class. Maybe I'll do all three and release it to the Codeigniter community.
