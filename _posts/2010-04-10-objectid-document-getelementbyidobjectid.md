---
title: $("#objectID") != document.getElementById("objectID")
date:  2010-04-10 18:13:12
categories:
  - Javascript
  - jQuery
tags:
  - jQuery
  - Tips & Tricks
---

Using document.getElementById("...") in plain ol' Javascript will return a reference the DOM element by the given name. In jQuery, we use $ for everything. So I assumed using $("#...") would be the same thing. This is wrong. $("#...") will return an associative array (object) which is what allows us to change properties of the DOM element. If I am looking to return the reference to the DOM element alone in jQuery, then you need to use $("#...").get(0) which will return the first instance of that object. The zero is important because .get() return an array. So if you have more than one instance of what you are looking for, you can target a specific instance of it.

If you can't bring yourself to use .get() you can also use $("#...")[0] which would do the same thing.
