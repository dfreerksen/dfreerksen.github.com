---
title: Custom Spree Preferences
date: 2016-02-15 06:43:37
categories:
  - ruby
tags:
  - ruby
  - rails
  - spree
---

I've been working with Spree for a while. I've made and helped build a lot of Spree extensions. Some of them open source, some of them private. People don't seem to understand how to create new preferences. Or if they do, they don't make posts about it. There are a couple ways to create custom, global preferences in Spree. Each has its own merit and drawback. The first way it to extend the existing Spree preferences. The second way is to create new preferences under a new namespace.

[Solidus](solidus_github) is the successor to [Spree](spree_github). For the time being, Solidus is still using the Spree namespace. It may change in the future, but custom preferences should still be created the same way in Solidus as they are in Spree.

If the preferences are for the benefit of only your extension, it's better to create the new preferences under a new namespace. If the preferences are to benefit or create functionality to help Spree core or other extensions, create your preferences under the Spree namespace.

Start off by creating a new [Spree extension][spree_extension].

```bash
$ spree extension your_engine
```

I am using `your_engine` as an example. You can name your extension whatever you like.

For the first option of creating custom preferences, let's create the new preferences under the Spree namespace.

Here, we need to extend the existing `app_configuration.rb` model. In Spree, extending an existing model or controller requires you adding `_decorator` to the file name. Create a new file named `app/models/spree/app_configuration_decorator.rb`. Inside it, add the following

```ruby
Spree::AppConfiguration.class_eval do
  preference :custom_foo, :string, default: "bar"
  preference :custom_count, :integer, default: 1
end
```

This is all that needs to be done. Access to the preferences can be done the same way as other Spree preferences:

```ruby
# get
Spree::Config.custom_foo
Spree::Config[:custom_foo]
Spree::Config["custom_foo"]

# set
Spree::Config.custom_foo = "foo"
Spree::Config[:custom_foo] = "foo"
Spree::Config["custom_foo"] = "foo"
```

The second option for creating custom preferences has only one extra step. Using the `YourEngine` extension that we created earlier, start by creating a new file at `app/models/spree/your_engine_setting.rb`. Inside it, add the following

```ruby
module Spree
  class YourEngineSetting < Preferences::Configuration
    preference :custom_foo, :string, default: "bar"
    preference :custom_count, :integer, default: 1
  end
end
```

We also need to initialize the preferences so they can be accessed. Inside `lib/your_engine/engine.rb` add the following

```ruby
initializer "your_engine.preferences", before: :load_config_initializers do
  YourEngine::Config = Spree::YourEngineSetting.new
end
```

Access to the preferences is still similar to accessing Spree preferences:

```ruby
# get
YourEngine::Config.custom_count
YourEngine::Config[:custom_count]
YourEngine::Config["custom_count"]

# set
YourEngine::Config.custom_count = 2
YourEngine::Config[:custom_count] = 3
YourEngine::Config["custom_count"] = 4
```

Updating custom preferences through a form submit is rather simple too. You can update one by one, or you can run the values through an `each` to update them. The following would work well

```ruby
params.each do |name, value|
  next unless YourEngine::Config.has_preference? name

  YourEngine::Config[name] = value
end
```

[solidus_github]: https://github.com/solidusio/solidus
[spree_github]: https://github.com/spree/spree
[spree_extension]: https://guides.spreecommerce.com/developer/extensions_tutorial.html#creating-an-extension
