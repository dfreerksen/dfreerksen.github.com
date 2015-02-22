var gulp         = require('gulp')
    config       = require('../config'),
    bourbon      = require('./plugins/bourbon'),
    fontawesome  = require('./plugins/fontawesome'),
    mediaqueries = require('./plugins/mediaqueries'),
    neat         = require('./plugins/neat')
    normalize    = require('./plugins/normalize');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  // Plugins
  gulp.watch(bourbon.src, ['bourbon']);
  gulp.watch(fontawesome.src, ['fontawesome']);
  gulp.watch(mediaqueries.src, ['mediaqueries']);
  gulp.watch(neat.src, ['neat']);
  gulp.watch(normalize.src, ['normalize']);

//   gulp.watch(icons.src, ['icons']);
//   gulp.watch(jquery.src, ['jquery']);
//   gulp.watch(search.src, ['search']);
//
//   // Optimize tasks (images, SVG)
//   gulp.watch(images.src, ['images']);
//   gulp.watch(svg.src, ['svg']);
//
//   // Javascripts
//   gulp.watch(coffee.src[0], ['coffee']);
//
//   // Stylesheets
//   gulp.watch(sass.src[0], ['sass']);
});
