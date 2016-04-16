var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  csslint = require('gulp-csslint'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  tsify = require('tsify'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  typescript = require('gulp-typescript')

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


gulp.task("js", function () {

  gulp.src('src/bricklayer.ts')
    .pipe(typescript({
      module: 'commonjs',
      out: 'bricklayer-node.js'
    }))
    .pipe(gulp.dest('./dist'));

  browserify()
    .add('./src/bricklayer.ts')
    .plugin(tsify, {
      module: "commonjs"
    })
    .bundle()
    .on('error', function (error) {
      console.error(error.toString());
    })
    .pipe(source('./dist/bricklayer.js'))
    .pipe(gulp.dest("./"));

  gulp.src("./dist/bricklayer.js")
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist"))
});

gulp.task("watch", ["css", "js"], function () {
  browserSync.init({
    notify: false,
    // proxy: "localhost/bricklayer"
  });
  gulp.watch('./src/*.scss', ["css"]);
  gulp.watch('./src/*.ts', ["js"]);
});


gulp.task("default", ["watch"]);
gulp.task("export", ["css", "js"]);
