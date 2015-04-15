var gulp         = require('gulp')
    config       = require('../config'),
    bourbon      = require('./plugins/bourbon'),
    consolelog   = require('./plugins/consolelog'),
    fontawesome  = require('./plugins/fontawesome'),
    jquery       = require('./plugins/jquery'),
    jquerymap    = require('./plugins/jquerymap'),
    mediaqueries = require('./plugins/mediaqueries'),
    neat         = require('./plugins/neat'),
    normalize    = require('./plugins/normalize'),
    requirejs    = require('./plugins/requirejs');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  // N/A
});
