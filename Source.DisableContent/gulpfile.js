var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    rename = require("gulp-rename");

var errorHandler = function (error) {
    console.log(error);
    this.emit('end');
}

var resolveMinifiedPath = function (path) {
    var params = path.split("/");
    var file = params.splice(params.length - 1, 1)[0];
    var newPath = params.join("/") + "/";

    return {
        file: file,
        path: newPath
    };
}

// Minify JS Files
gulp.task('minify:js', function () {
    return gulp.src('resource/*.js')
    .pipe(uglify())
    .pipe(rename("utility.disableElement.min.js"))
    .pipe(gulp.dest('dist/min/js'))
});

//Watch JS task
gulp.task('default:utility:js', function () {
    gulp.watch(['resource/utility.disableElement.js'], ['minify:js']);
});




