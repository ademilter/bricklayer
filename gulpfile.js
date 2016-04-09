var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    csslint = require('gulp-csslint');

var browserReload = browserSync.reload;

gulp.task("css", function () {
    gulp.src("./src/bricklayer.scss")
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(prefix())
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.stream());
});


gulp.task("watch", ["css"], function () {
    browserSync.init({
        notify: false,
        // proxy: "localhost/bricklayer"
    });
    gulp.watch('./src/*.scss', ["css"]);
});


gulp.task("default", ["watch"]);
gulp.task("export", ["css"]);