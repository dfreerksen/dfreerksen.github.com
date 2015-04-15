var gulp    = require('gulp'),
    changed = require('gulp-changed');

var config       = require('../../config'),
    handleErrors = require('../../util/handleErrors');

module.exports = {
  src:  config.assets.bower + '/jquery/dist/jquery.min.map',
  dest: config.assets.vendor
};

gulp.task('jquerymap', function() {
  var source      = module.exports.src,
      destination = module.exports.dest;

  return gulp.src(source)
             .pipe(changed(destination))
             .pipe(gulp.dest(destination))
             .on('error', handleErrors);
});
