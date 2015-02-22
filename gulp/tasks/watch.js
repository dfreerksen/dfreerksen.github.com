var gulp         = require('gulp')
    config       = require('../config'),
    bourbon      = require('./plugins/bourbon'),
    fontawesome  = require('./plugins/fontawesome'),
    jquery       = require('./plugins/jquery'),
    jquerymap    = require('./plugins/jquerymap'),
    mediaqueries = require('./plugins/mediaqueries'),
    neat         = require('./plugins/neat'),
    normalize    = require('./plugins/normalize'),
    coffee       = require('./actions/coffee'),
    concat       = require('./actions/concat');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(coffee.src, ['coffee']);
  gulp.watch(concat.src, ['concat']);
});
