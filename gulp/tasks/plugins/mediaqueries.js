var gulp    = require('gulp'),
    changed = require('gulp-changed');

var config       = require('../../config'),
    handleErrors = require('../../util/handleErrors');

module.exports = {
  src:  config.assets.bower + '/sass-mediaqueries/_media-queries.scss',
  dest: config.assets.sass + '/plugins'
};

gulp.task('mediaqueries', function() {
  var source      = module.exports.src,
      destination = module.exports.dest;

  return gulp.src(source)
             .pipe(changed(destination))
             .pipe(gulp.dest(destination))
             .on('error', handleErrors);
});
