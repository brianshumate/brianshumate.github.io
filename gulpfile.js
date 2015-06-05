var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('package-js', function () {
    return gulp.src(['./src/lib/jquery.nicescroll.min.js', './src/lib/main.min.js', './src/lib/wow.min.js', './src/js/main.js'])
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./js/'))
            .pipe(uglify({ outSourceMap: true }))
            .pipe(rename(function (path) {
                if(path.extname === '.js') {
                    path.basename += '.min';
                }
            }))
            .pipe(gulp.dest('./js/'));
});

gulp.task('minify-css', function() {
  return gulp.src('./src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./'));
});

gulp.task('deploy', ['package-js', 'minify-css']);

gulp.task('default', ['deploy']);
