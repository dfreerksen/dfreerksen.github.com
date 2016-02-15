---
title: Getting started with Rails engines
date: 2015-06-07 21:22:19
categories:
  - rails
  - rspec
  - ruby
tags:
  - rails
  - rspec
  - ruby
---

If you work with Ruby on Rails at all, at some point, you're going to need to make a Rails engine. It is a lot easier than it looks or sounds. Essentially, what a Rails engine is, is a Rails app that gets loaded into another Rails app. It has a similar structure as any other Rails application.

The first thing you need to do is determine a name. If you are going to put it on [RubyGems][ruby_gems], head on over and make sure the name isn't already taken. RubyGems also has some [basic guides][ruby_gems_guides] on how to name your engine; use only lower case letters, use underscore for multiple words (no spaces), and use dashes for extensions.

Out of the box, Rails uses [Test::Unit][test_unit] at the default test framework. Most people prefer [Rspec][rspec]. Both are very good test frameworks. Here, we'll be using Rspec.

For the purposes of this post, we'll use the name `foo_bar` as the engine name.

{% highlight bash %}
$ rails plugin new foo_bar -T --dummy-path=spec/dummy
{% endhighlight %}

`-T` tells the generator to not generate the `test` directory (where the generated Test::Unit files are put).

`--dummy-path=spec/dummy` tells the generator to build a dummy app in the `spec/dummy` directory. If we were using Test::Unit, the dummy app would be generated into `test/dummy`. But we want to use Rspec.

The directory structure should look something like this

{% highlight none %}
.
├── .gitignore
├── Gemfile
├── Gemfile.lock
├── MIT-LICENSE
├── README.rdoc
├── Rakefile
├── foo_bar.gemspec
├── lib
|   ├── foo_bar
|   |   └── version.rb
|   ├── foo_bar.rb
|   └── tasks
|       └── foo_bar_tasks.rake
└── spec/
    └── dummy
        └── ...
{% endhighlight %}

You can also add the `--mountable` flag which will create the engine in an isolated namespace. All of your controllers, models, etc will be use the `FooBar::` namespace.

{% highlight bash %}
$ rails plugin new foo_bar -T --dummy-path=spec/dummy --mountable
{% endhighlight %}

You can also add the `--full` flag which will create the engine and share the namespace of the main app.

{% highlight bash %}
$ rails plugin new foo_bar -T --dummy-path=spec/dummy --full
{% endhighlight %}

Let's add [Rspec][rspec_rails] as a dependency to the gem. Open `foo_bar.gemspec`. At the bottom, add:

{% highlight ruby %}
s.add_development_dependency "rspec-rails", "~> 3.2.3"
{% endhighlight %}

If you used the `--full` or `--mountable` flag, add [FactoryGirl][factory_girl_rails] as a dependency to the gem. Open `foo_bar.gemspec`. At the bottom, add:

{% highlight ruby %}
s.add_development_dependency "factory_girl_rails", "~> 4.5.0"
{% endhighlight %}

Also, if you used the `--full` or `--mountable` flag, edit your engine's `lib/foo_bar/engine.rb` file to include a couple RSpec configurations. This will generate the appropriate RSpec files when you generate a controller or model in your engine.

{% highlight ruby %}
module FooBar
  class Engine < ::Rails::Engine
    isolate_namespace FooBar

    config.generators do |g|
      g.test_framework :rspec
      g.fixture_replacement :factory_girl, dir: 'spec/factories'
    end
  end
end
{% endhighlight %}

Run `bundle install`.

Run the RSpec generator:

{% highlight bash %}
$ rails generate rspec:install
{% endhighlight %}

This will create `.rspec`, `spec/spec_helper.rb`, and `spec/rails_helper.rb`.

Open `rails_helper.rb`. Change the line

{% highlight ruby %}
require File.expand_path('../../config/environment', __FILE__)
{% endhighlight %}

to

{% highlight ruby %}
require File.expand_path('../dummy/config/environment', __FILE__)
{% endhighlight %}

This corrects the path to where the tests can load the environment. Also inside `rails_helper.rb`, uncomment the following line:

{% highlight ruby %}
Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }
{% endhighlight %}

Create `support/factory_girl.rb`. Inside it add

{% highlight ruby %}
require 'factory_girl_rails'

RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
end
{% endhighlight %}

You can now either create factories for your models in `spec/factories/` or they will be generated into that directory.

After creating some models and migrations, run the migrations for the test app and the test database:

{% highlight bash %}
$ bundle exec rake app:db:migrate
$ bundle exec rake app:db:test:prepare
{% endhighlight %}

Run `bundle exec rspec spec`.

[ruby_gems]:          https://rubygems.org/
[ruby_gems_guides]:   http://guides.rubygems.org/name-your-gem/
[test_unit]:          https://github.com/test-unit/test-unit
[rspec]:              https://github.com/rspec/rspec
[rspec_rails]:        https://github.com/rspec/rspec-rails
[factory_girl_rails]: https://github.com/thoughtbot/factory_girl_rails
