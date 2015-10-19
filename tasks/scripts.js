var gulp = require('gulp');

var jshint     = require('gulp-jshint');
var rename     = require('gulp-rename');
var notify     = require('gulp-notify');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');
var babel      = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint.reporter('default'))
    .pipe( sourcemaps.init() )
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts updated' }));
});

