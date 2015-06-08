var gulp = require('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var del = require('del');
var gifsicle = require('imagemin-gifsicle');
var imagemin = require('gulp-imagemin');
var jpegtran = require('imagemin-jpegtran');
var optipng = require('imagemin-optipng');
var rename = require('gulp-rename');
var svgo = require('imagemin-svgo');
var uglify = require('gulp-uglify');
var uncss = require('gulp-uncss');


gulp.task('clean', function (cb) {
  del(['./css/**/*', './js/**/*', '/img/**/*'], cb);
});

gulp.task('process-preloader-css', function() {
    return gulp.src('./src/css/preloader.css')
        .pipe(csso())
        .pipe(gulp.dest('./css/'));
});

gulp.task('process-css', function() {
    return gulp.src(['./src/css/bootstrap.min.css',
                     './src/css/style.css',
                     './src/css/responsive.css',
                     './src/css/animate.css',
                     './src/css/simple-line-icons.css'])
        .pipe(concat('main.css'))
        .pipe(uncss({
          html: ['http://brianshumate.com', 'index.html']
        }))
        .pipe(csso())
        .pipe(gulp.dest('./css/'));
});

gulp.task('copy-css', function() {
    return gulp.src(['./src/css/bootstrap.min.css',
                     './src/css/style.css',
                     './src/css/responsive.css',
                     './src/css/animate.css',
                     './src/css/simple-line-icons.css'])
        .pipe(concat('main.css'))
        .pipe(uncss({
          html: ['http://brianshumate.com', 'index.html']
        }))
        //.pipe(csso())
        .pipe(gulp.dest('./css/'));
});

gulp.task('process-js', function () {
    return gulp.src(['./src/js/jquery.easing.min.js',
                     './src/js/jquery.nicescroll.min.js',
                     './src/js/main.js',
                     './src/js/wow.min.js'])
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

gulp.task('copy-lib', function () {
    return gulp.src(['./src/js/bootstrap.min.js',
                     './src/js/jquery-latest.min.js'])
            .pipe(gulp.dest('./js/'));
});

gulp.task('process-images', function () {
	return gulp.src('src/img/**/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [jpegtran(), optipng(), gifsicle(), svgo()]
		}))
		.pipe(gulp.dest('./img/'));
});

gulp.task('package', ['process-js',
                      'copy-lib',
                      'process-preloader-css', 
                      'copy-css',
                      'process-images']);

gulp.task('default', ['package', 'clean']);
