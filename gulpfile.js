//Dependencias
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
//Tarea jshintjs
gulp.task('lint:jshint', function() {
  return gulp.src(['./public/js/*.js','./models/*.js','./config/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

//Tarea lintcss
gulp.task('lint:jscs', function() {
    return gulp.src('./public/js/*.js','./models/*.js','./config/*.js'])
        .pipe(jscs())
        .pipe(jscs.reporter());
});
