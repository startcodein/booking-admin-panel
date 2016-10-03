var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var notify = require("gulp-notify");

var config = {
	sassDir: './resources/sass',
	jsPath: './resources/scripts',
	fontDir: './resources/fonts',
	imageDir: './resources/images',
	bowerDir: './bower_components'
};

gulp.task('styles', function () {
    var processors = [
        autoprefixer({browsers: ['last 15 versions'], cascade: false}),
        mqpacker,
        // cssnano,
    ];
    return gulp.src(config.sassDir + '/app.scss')
        .pipe(sass())
        .on("error", notify.onError(function (error) {
          return "Error: " + error.message;
        }))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('files', function() {
    return gulp.src([
	    	'resources/**.html'
    	])
        .pipe(gulp.dest('./public'))
		.pipe(livereload());
});

gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true,
    debug: true
	});
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('resources/**.html', ['files']);
	gulp.watch(config.sassDir + '/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch', 'connect']);
