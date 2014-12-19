---
title: Blocks in Magento
date:  2011-09-17 00:41:11
categories:
- Magento
- PHP
tags:
- Magento
---

One of the things Magento got right is blocks. It's one of the few things I am continually impressed by. There are a lot of ways to add a static block to the page.

**XML** is probably the most common place to add a static block. You find whatever block you want to add your static block into and you add something like:

{% highlight xml linenos %}
<block type="cms/block" name="YOUR_BLOCK_ID" before="-">
  <action method="setBlockId"><block_id>YOUR_BLOCK_ID</block_id></action>
</block>
{% endhighlight %}

Adding a static clock through **layout XML** can be very useful if you need to add a static block to a sidebar on a single page for example instead of all pages.

{% highlight xml linenos %}
<reference name="left">
  <block type="cms/block" name="YOUR_BLOCK_ID">
    <action method="setBlockId"><block_id>YOUR_BLOCK_ID</block_id></action>
  </block>
</reference>
{% endhighlight %}

Adding you static block through **PHP** may be the least common way. This, however, can be very useful if you want to define areas in your theme where a menu or a widgets could go. To add a static block in PHP you would use:

{% highlight php linenos startinline %}
echo $this->getLayout()->createBlock('cms/block')->setBlockId('YOUR_BLOCK_ID')->toHtml();
{% endhighlight %}

Adding a static block through a short code is very powerful. It allows you to add a static block into a CMS page or even your products.

{% highlight html linenos %}
{% raw %}
{{block type="cms/block" block_id="YOUR_BLOCK_ID"}}
{% endraw %}
{% endhighlight %}
