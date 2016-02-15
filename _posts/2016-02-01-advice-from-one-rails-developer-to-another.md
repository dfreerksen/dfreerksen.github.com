---
title: Advice From One Rails Developer to Another
date: 2016-02-01 09:18:46
categories:
  - ruby
tags:
  - ruby
---

There comes a time in every codebase when you realize there is always a problem when adding or removing code from your application. Does it take 20 minutes to run the entire test suite? Does it take more than 5 minutes to deploy? Things are so intertwined that making one code change has unintended consequences.

Here's my advice: Rails extensions.

A base Rails application should only be about configuration. It is meant for maintaining gem versions, migrations and application preferences and configurations. A Rails application should have nothing else in it. Don't build any type of functionality into the base application. Including the design. Instead, build it as a Rails engine and add it to your application in the Gemfile using `gem "my_extension", github: "username/my_extension"`.

You can have as many extensions as necessary so there is a clear separation of concern from one extension to the next. Each extension should only focus on one specific job. Your extensions should not rely on each other to be loaded in order to work.

This will clean up the codebase as well as help ensure your application doesn't become unmanageable.

A deploy should become a task consisting of adding new migrations, running migrations, and adding or updating gems.
