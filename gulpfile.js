'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src('./assets/javascripts/**/*.js')
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('./js/'));
});

gulp.task('sass', function () {
  return gulp.src('./assets/stylesheets/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./assets/javascripts/**/*.js', ['scripts']);
});