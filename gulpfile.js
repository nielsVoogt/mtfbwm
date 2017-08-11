
'use strict';

var gulp         = require('gulp'),
    watch        = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass');

function onError(err) {
    console.log(err);
    this.emit('end');
}

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 1%', 'Safari 8', 'Firefox ESR']
};

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
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./src/css/'));
});
