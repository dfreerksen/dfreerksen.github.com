---
---

requirejs.config
  baseUrl: 'assets/javascripts'
  paths:
    jquery: 'vendor/jquery-1.11.2.min'
requirejs [
  'jquery'
  'site'
], ($) ->
  console.log 'application!'
  return
