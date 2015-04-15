var gulp    = require('gulp'),
    changed = require('gulp-changed');

var config       = require('../../config'),
    handleErrors = require('../../util/handleErrors');

module.exports = {
  src:  config.assets.bower + '/consolelog/consolelog.min.js',
  dest: config.assets.vendor
};

gulp.task('consolelog', function() {
  var source      = module.exports.src,
      destination = module.exports.dest;

  return gulp.src(source)
             .pipe(changed(destination))
             .pipe(gulp.dest(destination))
             .on('error', handleErrors);
});
