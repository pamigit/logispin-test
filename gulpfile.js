'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const { task } = require('gulp');
const del = require('del');

// In the first way i try with this commented code

/*gulp.task('sass', function () { 
    gulp.src('src/scss/style.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('src/css'));
});

gulp.task('sass:watch', function() { 
    gulp.watch('src/scss/style.scss', ['sass']);
});*/

gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});