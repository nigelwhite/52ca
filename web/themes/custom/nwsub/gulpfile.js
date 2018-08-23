// this needs js processing and broswerSync
// use with command gulp watchSass
// nw

'use strict';

var gulp = require('gulp'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
maps = require('gulp-sourcemaps');

gulp.task('compileSass', function() {
  return gulp.src('scss/style.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('watchSass', function() {
  gulp.watch('scss/**/*.scss', ['compileSass']);
})

gulp.task('build', ['compileSass']);

gulp.task('default', ['build']);
