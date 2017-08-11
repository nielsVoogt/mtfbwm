
'use strict';

var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    sass         = require('gulp-sass');

function onError(err) {
    console.log(err);
    this.emit('end');
}

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('watch', ['sass'], function() {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});
