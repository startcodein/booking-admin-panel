var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

var config = {
	sassDir: './resources/sass',
	jsPath: './resources/scripts',
	// fontDir: './resources/fonts',
	// imageDir: './resources/images',
	bowerDir: './bower_components'
};

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 15 versions'], cascade: false}),
        mqpacker,
        cssnano,
    ];
    return gulp.src(config.sassDir + '/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./public/css'));
});
