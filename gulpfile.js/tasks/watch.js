var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config = require('../../gulpconfig').watch;

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.src.copy, ['copy']);
  gulp.watch(config.src.fonts, ['fonts']);
  gulp.watch(config.src.javascripts, ['javascripts']);
  gulp.watch(config.src.stylesheets, ['stylesheets']);
});
