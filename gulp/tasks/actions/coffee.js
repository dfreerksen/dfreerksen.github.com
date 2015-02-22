var gulp       = require('gulp'),
    coffee     = require('gulp-coffee'),
    coffeelint = require('gulp-coffeelint'),
    gulpif     = require('gulp-if'),
    plumber    = require('gulp-plumber'),
    size       = require('gulp-size'),
    uglify     = require('gulp-uglify');

var config       = require('../../config'),
    handleErrors = require('../../util/handleErrors');

module.exports = {
  src:  config.assets.javascript + "/**/*.coffee",
  dest: config.assets.javascript
};

gulp.task('coffee', function() {
  var source      = module.exports.src,
      destination = module.exports.dest;

  return gulp.src(source)
             .pipe(plumber())
             .pipe(coffee())
             .pipe(gulpif(config.compressing, uglify()))
             .pipe(gulpif(config.linting, coffeelint(), coffeelint.reporter()))
             .pipe(size())
             .pipe(gulp.dest(destination))
             .on('error', handleErrors);
});
