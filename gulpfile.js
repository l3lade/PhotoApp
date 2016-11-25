"use strict";
var gulp = require("gulp");
var typescript = require("gulp-typescript");


gulp.task('ts', function () {
    gulp.src("src/**/*.ts")
        .pipe(typescript())
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", function () {
    gulp.watch("src/**/*.ts", ["ts"]);
});

gulp.task("default", ["ts", "watch"]);
