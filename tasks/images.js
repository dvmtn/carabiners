var gulp     = require('gulp');
var cache    = require('gulp-cache');
var notify   = require('gulp-notify');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images updated' }));
});

