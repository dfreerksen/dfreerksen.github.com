var gulp    = require('gulp'),
    changed = require('gulp-changed');

var config       = require('../../config'),
    handleErrors = require('../../util/handleErrors');

module.exports = {
  src:  config.assets.base + 'bower_components/fontawesome/fonts/**/*.{eot,otf,svg,ttf,woff,woff2}',
  dest: config.assets.destination + '/fonts/fontawesome'
};

gulp.task('fontawesome', function() {
  var source      = module.exports.src,
      destination = module.exports.dest;

  return gulp.src(source)
             .pipe(changed(destination))
             .pipe(gulp.dest(destination))
             .on('error', handleErrors);
});
