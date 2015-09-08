var gulp        = require('gulp'),
    browsersync = require('browser-sync');

var config = require('../../gulpconfig').browsersync;

gulp.task('browsersync', function() {
  browsersync(config);
});
