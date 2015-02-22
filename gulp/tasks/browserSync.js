var gulp        = require('gulp'),
    browserSync = require('browser-sync');

var config = require('../config.js');

gulp.task('browserSync', ['organize'], function() {
  var args = {};

  args.proxy = config.localRootUrl || null;

  if (args.proxy) {
    browserSync.init(args);
  }
});
