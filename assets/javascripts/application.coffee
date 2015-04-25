---
---

requirejs.config
  baseUrl: '/assets/javascripts'
  paths:
    jquery: 'vendor/jquery.min'
    consolelog: 'vendor/consolelog.min'
requirejs [
  'jquery'
  'consolelog'
], ($) ->
  console.log 'www.davidfreerksen.com'
  return
