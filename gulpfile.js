const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');

gulp.task('css', function () {
  return gulp
    .src('./scss/main.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
  return gulp.watch('./scss/**/*.scss', gulp.series('css'));
});

gulp.task('default', gulp.series('css', 'watch'));
