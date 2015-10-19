var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {
  del(['dist/css', 'dist/js', 'dist/images'], cb)
});

