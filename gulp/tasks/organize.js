var gulp = require('gulp');

gulp.task('organize', [
  'bourbon',      // Copy Bourbon styles
  'fontawesome',  // Copy FontAwesome fonts
  'mediaqueries', // Copy Media Queries CSS
  'neat',         // Copy Neat styles
  'normalize'     // Copy Normalize.css
]);
