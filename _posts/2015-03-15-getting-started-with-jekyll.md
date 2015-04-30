---
title: Getting started with Jekyll
date: 2015-03-15 11:18:18
categories:
- programming
tags:
- ruby
- cli
---

For the longest time, I've had a Wordpress blog. Most people start off with Wordpress. Wordpress is quick to set up, easy to use, and simply to maintain. My biggest issue with Wordpress is that it uses a database. I, like most people, don't update my blog or website enough to require a database be queried for every page request. The only real need for a database is for comments. Using [Disqus][disqus] for comments, you no longer need to use a database.

I decided to leverage the power of [Github Pages][githubpages] and host my site there. Github Pages is powered by [Jekyll][jekyll]. Jekyll is an open source static site generator written in [Ruby][ruby]. Instead of using a database, Jekyll takes content written in HTML and [Markdown][markdown] and generates a complete website that can be served by any web server.

This site is my first real experience with Jekyll. I wanted to document my adventure in setting it up.

I'm on a Mac so I'm going to run through this assuming you are too or you are smart enough to Google how to do it on the OS you are using.

You will need:

* Minimal knowledge of the command line
* Ruby

First, start up Terminal. Terminal is located at `/Applications/Utilities/Terminal.app`. You can either browse Finder to find the application or enter `Terminal` into Spotlight and it will find it for you.

If you are on a Mac, Ruby came pre-installed on your computer. Just out of curiosity, let's check the version of Ruby we are running:

```bash
$ ruby -v
```

Note that the `$` above should not be entered into Terminal. The `$` represents the prompt where you can enter commands into Terminal.

If it comes back with `ruby: command not found`, you don't have Ruby installed. I won't be going over how to install Ruby here. It's easy enough to install. Just head over to the Ruby website.

The next thing we need to do is install the Jekyll gem. In Terminal, enter:

```bash
$ gem install jekyll
```

The next thing we have to do is decide where to put our new Jekyll site. You can decide on your own where you want to set it up. For the purpose of this post, we'll set it up in `~/Documents`. So we need to move Terminal to be in the `~/Documents` directory.

```bash
$ cd ~/Documents
```

The `~` represents your home directory. Your home directory is generally located at `/Users/<your-account>`. When you enter `cd ~/Documents` you are actually entering `cd /Users/<your-account>/Documents`. You can move around through directories using `cd`. This is the Unix command for change directory

Side note: At any time, if you are not sure what directory you are in using Terminal, enter `pwd`. This is the Unix command for `print working directory`. It will tell you the current directory you are in.

The next step is the fun one. Generating a basic Jekyll site. When Jekyll generates a new site, it has to collect all of the files in one place. To generate a new Jekyll install for the site, run the following:

```bash
$ jekyll new my-site
```

It should tell you `New jekyll site installed in /Users/<your-account>/Documents/my-site`. A basic Jekyll site was just generated for you into a new folder named `my-site`. Now move into the `my-site` directory.

```bash
$ cd my-site
```

Jekyll just generated a bunch of files for you. Your directory structure should look something like this

```
.
├── .gitignore
├── _config.yml
├── _includes
|   ├── footer.html
|   ├── head.html
|   └── header.html
├── _layouts
|   ├── default.html
|   ├── page.html
|   └── post.html
├── _posts
|   └── 2015-03-15-welcome-to-jekyll.markdown
├── _sass
|   ├── _base.scss
|   ├── _layout.scss
|   └── _syntax-highlighting.scss
├── about.md
├── css
|   └── main.css
├── feed.xml
└── index.html
```

Now that we have the files generates, let's see what the site looks like. We have two options; build and serve.

```bash
$ jekyll build
```

This will generate the site and place all of the generated files in a new directory named `_site` (`/Users/<your-account>/Documents/my-site/_site`). This will only generate the site. Any changes you make to the files will not be reflected until you run this command again.

Jekyll comes with a built-in development server that will allow you to locally view the generated site in your browser.

```bash
$ jekyll serve
```

This will start the development server and allow you to browse the site by going to `http://localhost:4000` or `http://127.0.0.1:4000`. The files for your site where generated and added to the `_site` directory. This will also watch for file changes. So when you make changes to a post, page, stylesheet, or layout, the site will automatically be regenerated for you. All you have to do is refresh the browser to see the changes. If you make changes to the config file (`_config.yml`), you will need to restart the development server. You can do this by entering `Ctrl + c` in Terminal to stop the server. Start the server again by entering `jekyll serve`

Cool. Now what?

I'm not going to reinvent the wheel and explain how to format your Markdown and YAML files or explain file name formatting. You can read through the [documentation][documentation] for that. From here, you can create pages and blog posts as needed. Modifying a layout file will cause all pages to get these changes. Jekyll uses [Liquid][liquid] in the templates. You may need to read up on Liquid if you plan on making modifications to the template files.

[disqus]:        https://disqus.com/
[githubpages]:   https://pages.github.com/
[jekyll]:        http://jekyllrb.com/
[ruby]:          https://www.ruby-lang.org/
[markdown]:      http://en.wikipedia.org/wiki/Markdown
[documentation]: http://jekyllrb.com/docs/home/
[liquid]:        http://liquidmarkup.org/
