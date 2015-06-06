var gulp = require('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');

gulp.task('process-preloader-css', function() {
    return gulp.src('./src/css/preloader.css')
        .pipe(csso())
        .pipe(gulp.dest('./css/'));
});

gulp.task('process-css', function() {
    return gulp.src(['./src/css/bootstrap.min.css', './src/css/style.css', './src/css/responsive.css', './src/css/animate.css', './src/css/simple-line-icons.css'])
        .pipe(concat('main.css'))
        .pipe(uncss({
          html: ['index.html', 'http://brianshumate.com']
        }))
        .pipe(csso())
        .pipe(gulp.dest('./css/'));
});

gulp.task('process-js', function () {
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

gulp.task('deploy', ['process-preloader-css', 'process-css', 'process-js']);

gulp.task('default', ['deploy']);
