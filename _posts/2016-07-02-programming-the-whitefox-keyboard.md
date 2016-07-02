---
title: Programming the Whitefox Keyboard
date: 2016-07-02 07:59:51
categories:
  - mac
tags:
  - mac
---

So you bought the [Whitefox][whitefox_massdrop] keyboard but not a fan or the key layout that comes with it? It's very easy to change. This walkthrough is specifically on the Mac. Though the same steps can be used on Linux. If you are not on a Mac, you'll need to check out the [Configurator Setup][configurator_setup] for the operating system you have.

**Step 1)** Design your [custom layout](https://input.club/configurator-whitefox) from Input Club. The default layout is True Fox so if you have a different layout, you need to select the correct one. I have the Aria layout. Here's my layout

![Whitefox Aria](/images/posts/2016/07/whitefox.png "Whitefox Aria")

When you are finished designing your layout, download the files. We will need them later. [Here are my layout files](/images/posts/2016/07/whitefox-aria.zip).

**Step 2)** Open a terminal. Everything from here on requires you enter commands into the command line.

**Step 3)** Install [dfu-util][dfu-util] using [Homebrew](homebrew) or [MacPorts](macports).

Install `dfu-util` using Homebrew

{% highlight bash %}
brew install dfu-util
{% endhighlight %}

Install `dfu-util` using MacPorts

{% highlight bash %}
port install dfu-util
port install libusb
{% endhighlight %}

**Step 4)** Plug the Whitefox keyboard into a USB port. Flip the keyboard upside down. There is a small circular hole offset from the center. Find something to poke the hole with. The hole will light up in orange. If you have LED lights on your keyboard, the LED lights will turn off.

**Step 5)** Upzip the zip file you downloaded from _Step 1_ with your layout. In the directory where the files were extracts is a file named `kiibohd.dfu.bin`. This is the only file you need to be concerned with.

**Step 6)** Flash the keyboard using `dfu-util`.

{% highlight bash %}
dfu-util -a 0 -R -D /path/to/kiibohd.dfu.bin
{% endhighlight %}

Obviously `/path/to/kiibohd.dfu.bin` would be the actual path to the `kiibohd.dfu.bin` file.

**Step 7)** Profit.

At this point, everything is done. You can start using your keyboard. The hole on the bottom of the keyboard will turn off. If you have LED lights on your keyboard, the LED lights will turn on again.

[whitefox_massdrop]: https://www.massdrop.com/buy/the-whitefox-keyboard
[configurator_setup]: https://input.club/configurator-setup
[dfu-util]: http://dfu-util.sourceforge.net/
[homebrew]: http://brew.sh/
[macports]: https://www.macports.org/
