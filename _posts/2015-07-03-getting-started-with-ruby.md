---
title: Getting started with Ruby
date: 2015-07-03 13:20:21
categories:
  - cli
  - programming
tags:
  - cli
  - programming
  - rails
  - ruby
---

After working with Ruby and Rails for a while, you start to take stuff for granted. How simple things are. We have some pretty great tools. Sure, some of them could be improved, but in general, we have some cool toys to play with. When you first start working with it, it's a bit overwhelming. All kinds of new terminology you have to learn. New code formatting to get accustomed to. You just wanted to learn Ruby. Now you have to figure out Bundler and Rails and ActiveRecord and SASS and Coffeescript and many times your still getting use to the command line. Everyone was in that same position at some point. You figure it out. You learn. You write blog posts to maybe help out the people that come after you.

The first thing you will need to start using Ruby is... [Ruby][ruby]. Apple computers come with Ruby already installed. I believe most \*nix distributions do as well. Windows does not. If you aren't sure if you have Ruby installed or not, open up a command line window and enter

{% highlight bash %}
$ ruby -v
{% endhighlight %}

If you have Ruby installed, it should come back with something along the lines of `ruby 2.2.2p95 [2015-04-13 revision 50295] [x86_64-darwin14]`. If you do not have it installed, it will come back with something like `bash: ruby: command not found`

If you do not have Ruby installed, let's do that first since it's a big prerequisite to using Ruby. There are a few ways you can install Ruby. There is an installer on the [Ruby website][ruby-downloads]. If you are working on your local machine, I would highly recommend installing [RVM][rvm] or [rbenv][rbenv] instead. RVM and rbenv are Ruby managers. They allow you to easily switch between have multiple versions of Ruby that you have installed on your computer.

I've used RVM in the past. I have no real issues with it. I prefer rbenv. So we will be going forward with that.

If you are not using a Mac, follow the instructions on the [rbenv Github page][rbenv]. Don't forget to install [ruby-build][ruby-build] as well since we will need that too.

If you are on a Mac, the easiest thing to do is install it using [Homebrew][homebrew]. To install it, enter the following into the command line

{% highlight bash %}
$ brew install rbenv ruby-build
{% endhighlight %}

Once the installation finishes, let's install Ruby! In your command line, enter the following

{% highlight bash %}
$ rbenv install --list
{% endhighlight %}

This is a list of all of the possible versions of Ruby that you can install. I'm not going to go into all of the possible versions you can install and what jruby, maglev, rbx, ree and topaz mean. We'll just keep it simple. At the time I am writing this post, the latest version of Ruby is v2.2.2. It should be in the list. So let's install that.

{% highlight bash %}
$ rbenv install 2.2.2
{% endhighlight %}

This will download Ruby version 2.2.2 to your computer and install it. This could take some time. Take a restroom break. Drink some water. You don't need to worry too much about where it gets installed. rbenv manages that for you. If you are wondering out of curiosity, Ruby versions get installed to `~/.rbenv/versions`

Ruby installed successfully! Which versions of Ruby do we have installed? Run the following

{% highlight bash %}
$ rbenv versions
{% endhighlight %}

2.2.2 should be listed. If it has a `*` next to it, skip to the next step. Otherwise, we need to set 2.2.2 as the current version of Ruby. To do that, enter the following

{% highlight bash %}
$ rbenv global 2.2.2
{% endhighlight %}

This is saying we want to use Ruby v2.2.2 for all Ruby commands including the command line. Let's see what version of Ruby we are using now

{% highlight bash %}
$ ruby -v
$ rbenv version
{% endhighlight %}

At this point, you're ready to start using Ruby. I understand at this point, it just brings up more questions. The first one that comes to mind is, "What now?" I'll have to write a couple more posts about getting started with gems and Bundler, getting started with Rails, and [getting started with Rails engines]({% post_url 2015-06-07-getting-started-with-rails-engines %}). Until then, happy coding!

[ruby]: https://www.ruby-lang.org/en/
[ruby-downloads]: https://www.ruby-lang.org/en/downloads/
[rbenv]: https://github.com/sstephenson/rbenv
[ruby-build]: https://github.com/sstephenson/ruby-build
[rvm]: https://rvm.io/
[homebrew]: http://brew.sh/
