

'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require("less");
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task("default",["sass","sass:watch"],function(){
	console.log("ok");
})

