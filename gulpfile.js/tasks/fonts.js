var gulp    = require('gulp'),
    plugins = require('gulp-load-plugins')({ camelize: true });

var config  = require('../../gulpconfig').fonts;

gulp.task('fonts-genericon', function() {
//   return gulp.src(config.genericons.src)
//     .pipe(plugins.changed(config.genericons.dest))
//     .pipe(gulp.dest(config.genericons.dest));
});

gulp.task('fonts', ['fonts-genericon']);
