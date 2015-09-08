var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config  = require('../../gulpconfig').copy;

gulp.task('copy-bourbon', function() {
  return gulp.src(config.bourbon.src)
    .pipe(plugins.changed(config.bourbon.dest))
    .pipe(gulp.dest(config.bourbon.dest));
});

gulp.task('copy-jquerymap', function() {
  return gulp.src(config.jquerymap.src)
    .pipe(plugins.changed(config.jquerymap.dest))
    .pipe(plugins.rename(config.jquerymap.rename))
    .pipe(gulp.dest(config.jquerymap.dest));
});

gulp.task('copy-mediaqueries', function() {
  return gulp.src(config.mediaqueries.src)
    .pipe(plugins.changed(config.mediaqueries.dest))
    .pipe(gulp.dest(config.mediaqueries.dest));
});

gulp.task('copy-neat', function() {
  return gulp.src(config.neat.src)
    .pipe(plugins.changed(config.neat.dest))
    .pipe(gulp.dest(config.neat.dest));
});

gulp.task('copy-normalize', function() {
  return gulp.src(config.normalize.src)
    .pipe(plugins.changed(config.normalize.dest))
    .pipe(gulp.dest(config.normalize.dest));
});

gulp.task('copy', ['copy-bourbon', 'copy-jquerymap', 'copy-mediaqueries', 'copy-neat', 'copy-normalize']);
