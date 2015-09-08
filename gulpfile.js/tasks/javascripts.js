var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true }),
    merge   = require('merge-stream');

var config = require('../../gulpconfig').javascripts;

gulp.task('javascripts', function() {
  return gulp.src(config.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.uglify(config.uglify))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.concat(config.name))
    .pipe(gulp.dest(config.dest));
});
