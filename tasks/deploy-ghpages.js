var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy-ghpages', function() {
  return gulp.src('./dist/**/*')
             .pipe(ghPages());
});
