---
---
requirejs.config
  baseUrl: '{{ "/assets/javascripts" | prepend:site.baseurl }}'
  paths:
    jquery: 'vendor/jquery.min'
    consolelog: 'vendor/consolelog.min'
requirejs [
  'jquery'
  'consolelog'
], ($) ->
  # console.log 'www.davidfreerksen.com'
  return
