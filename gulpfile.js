'use strict';

var gulp      = require('gulp');
var jade      = require('gulp-jade');
var stylus    = require('gulp-stylus');
var minify    = require('gulp-minify-css');

gulp.task('jaddy', function(){
  return gulp.src('./*.jade')
        .pipe(jade({
          pretty: true
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('stylus', function(){
  return gulp.src('./stylus/main.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./build/css'));
});

gulp.task('minify', ['stylus'] , function(){
  return gulp.src('.build/css/main.css')
    .pipe(minify())
    .pipe(gulp.dest('./build/css'));
});


gulp.task('build', ['jaddy', 'minify']);

gulp.task('watch', function(){
  gulp.watch(['./stylus/**/*.styl', './*.jade'], ['build']);
});


gulp.task('default', ['watch']);
