var gulp = require('gulp');

gulp.task('organize', [
  'bourbon',      // Copy Bourbon styles
  'fontawesome',  // Copy FontAwesome fonts
  'jquery',       // Copy jQuery
  'jquerymap',    // Copy jQuery Map
  'mediaqueries', // Copy Media Queries CSS
  'neat',         // Copy Neat styles
  'normalize'     // Copy Normalize.css
]);
