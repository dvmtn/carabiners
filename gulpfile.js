var gulp = require('gulp');

var livereload = require('gulp-livereload');
var requireDir = require('require-dir');
var tasks      = requireDir('./tasks');

gulp.task('default', ['clean', 'styles', 'scripts', 'images']);

gulp.task('dev', function() {
  gulp.watch('src/styles/**/*',  ['styles']);
  gulp.watch('src/scripts/**/*', ['scripts']);
  gulp.watch('src/images/**/*',  ['images']);

  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);
});
