---
title: Bitmap Smoothing
date:  2008-07-27 07:25:04
categories: 
- Actionscript
- Flex
tags:
- Flash
- Flex
---

Let's say you are loading in an image. The image is a little to big to fit in the area it is supposed to go in or maybe too small so you have to scale it up a little. The problem is, if you scale it, it will end up looking absolutely horrible. All is not lost. Adobe has an article by Ben Longoria on creating a component called <a href="http://www.adobe.com/cfusion/communityengine/index.cfm?event=showdetails&productId=2&postId=4001" target="_blank">SmoothImage</a> which basically takes your image and once it is loaded in, it casts it as a bitmap in order to apply bitmap smoothing to it. Ok, granted, the article is a little dated. It was created April 6, 2007. It can be used as a basis for your own custom MXML component. Maybe you are the type of person that likes to use Actionscript components instead of MXML components. This basically does the same thing. Once the image is loaded in, it calls this function which casts it as a bitmap and applies smoothing.

[Updated July 28, 2008] <a href="http://userflex.wordpress.com/2008/06/19/image-smoothing/" target="_blank">Here</a> is an example of an Actionscript classes bases example.
