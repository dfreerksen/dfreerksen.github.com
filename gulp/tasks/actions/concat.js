var gulp    = require('gulp'),
    changed = require('gulp-changed'),
    concat  = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    size    = require('gulp-size');

var config       = require('../../config'),
    handleErrors = require('../../util/handleErrors');

module.exports = {
  src:  [
    config.assets.javascript + '/jquery/jquery.min.js',
    config.assets.javascript + '/site.js'
  ],
  dest: config.assets.destination + '/javascripts',
  name: 'site.js'
};

gulp.task('concat', function() {
  var source      = module.exports.src,
      destination = module.exports.dest,
      name        = module.exports.name;

  return gulp.src(source)
             .pipe(plumber())
             .pipe(changed(destination))
             .pipe(concat(name))
             .pipe(size())
             .pipe(gulp.dest(destination))
             .on('error', handleErrors);
});
