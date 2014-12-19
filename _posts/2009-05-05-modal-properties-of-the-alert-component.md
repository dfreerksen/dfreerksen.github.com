---
title: Modal Properties of the Alert Component
date:  2009-05-05 07:26:48
categories:
  - Flex
tags:
  - Actionscript
  - Components
  - Flex
---

I'm not going to go into all of the properties of the Alert component. I am going to concentrate on the modal of the Alert. If you don't know what a modal is, a modal is the translucent overlay underneath the Alert component. This can be customized using CSS, but many people simply overlook it. A basic example of an Alert looks like this:

{% highlight actionscript linenos %}
Alert.show("My Title", "This is the message of the Alert component");
{% endhighlight %}

This creates an Alert with default properties. So now lets play with it a little:  
{% highlight actionscript linenos %}
Alert {
  modalTransparencyBlur: .4;
  modalTransparency: 0.5;
  modalTransparencyColor: red;
  modalTransparencyDuration: 500;
}
{% endhighlight %}

Or you can get a little fancy and make the CSS global:  
{% highlight actionscript linenos %}
global {
  modalTransparencyBlur: .4;
  modalTransparency: 0.5;
  modalTransparencyColor: red;
  modalTransparencyDuration: 500;
}
{% endhighlight %}
