# DavidFreerksen.com

[![Join the chat at https://gitter.im/dfreerksen/dfreerksen.github.com](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dfreerksen/dfreerksen.github.com?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Personal website of [David Freerksen](http://www.davidfreerksen.com) run on [Github Pages](https://pages.github.com/) and [Jekyll](http://jekyllrb.com/)


## Requirements

It is assumed that [Ruby](http://www.ruby-lang.org) is already set up on your machine. The site was built with Ruby v2.1.5 but should would fine with v2.0+.

##### Gems

It is assumed [Bundler](http://bundler.io/) is already installed. If it is not, install it using:

```
gem install bundler
```

#### NPM

Node Package Manager (NPM) binaries and source can be found on the [Node.js](http://nodejs.org/download/) website. Node.js will need to be installed before runny any Bower or Gulp commands.

#### Bower

Bower is used to manage various components used on the site. Github Pages will not run this command. This needs to be ran in development to get the required assets which will then be used by Gulp.

To install Bower, run:

```
npm install -g bower
```

#### Gulp

Gulp is used to build compiled Javascript and move Bower assets into place. Github Pages will not run this command. This needs to be ran in development. Install Gulp by running:

```
npm install -g gulp
```

NOTE: SASS and Coffeescript are compiled my Jekyll. Gulp is only used to concat Javascript into a single file.  


## Installation

#### Gems

Install all required gems by running:

```
bundle install
```

#### NPM

Install NPM assets by running:

```
npm install
```

> NOTE: The first time running this it will take a while. Patience is a virtue. It should not take as long when this is run subsequent times.

#### Bower

To install Bower components, run:

```
bower install
```

#### Gulp

Gulp is used to concat various Javascript files into a single file. To make Gulp build the file but not watch for file changes, run:

```
gulp
```

To make Gulp watch for file changes, simply run:

```
gulp watch
```

Gulp is also used to move various assets into place. This requires a separate command from just running the `gulp` or `gulp watch`. To move assets into their required location, run:

```
gulp organize
```

#### Jekyll

[Jekyll](http://jekyllrb.com/) is used to build this site. To build the site, run:

```
bundle exec jekyll build
```

To build the site but also watch for file changes, run:

```
bundle exec jekyll serve
```

This will start a Rake server to allow you to view the site in the browser by going to [http://localhost:4000/](http://localhost:4000/)


## Build Process

Install/update gems:

```
bundle install
```

Install/update NPM components

```
npm install
```

Install/update Bower components

```
bower install
```

Move assets into place

```
gulp organize
```

Build compiled Javascript file

```
gulp
```

Build the site

```
bundle exec jekyll serve
```


## Contributing

1. Fork it ( https://github.com/dfreerksen/dfreerksen.github.io/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
