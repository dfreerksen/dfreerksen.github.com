var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config  = require('../../gulpconfig').copy;

gulp.task('copy-jquerymap', function() {
  return gulp.src(config.jquerymap.src)
    .pipe(plugins.changed(config.jquerymap.dest))
    .pipe(plugins.rename(config.jquerymap.rename))
    .pipe(gulp.dest(config.jquerymap.dest));
});

gulp.task('copy', ['copy-jquerymap']);
