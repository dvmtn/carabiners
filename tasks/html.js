var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('html', function(){
  return gulp.src('src/html/**/*.jade')
             .pipe(jade())
             .pipe(gulp.dest('./dist/'))
});
