var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var notify = require("gulp-notify");
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var es = require('event-stream');
var angularFilesort = require('gulp-angular-filesort');
var flatten = require('gulp-flatten');

var config = {
	sassDir: './resources/assets/sass',
	jsPath: './resources/app',
	htmlPath: './resources/app',
	fontDir: './resources/fonts',
	imageDir: './resources/images',
	bowerDir: './bower_components'
};

// TODO bower install from bower.json
gulp.task('bower', function(){
  return gulp.src(mainBowerFiles('**/*.js'))
		.on("error", notify.onError(function (error) {
			return "Error: " + error.message;
		}))
		.pipe(gulp.dest('./public/js'))
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('index', function () {
	return gulp.src('./resources/index.html')
		.pipe(inject(gulp.src(mainBowerFiles('**/*.js'), {read: false}), {name: 'bower'}))
	  .pipe(inject(es.merge(
			gulp.src(config.jsPath + '/**/*.js').pipe(angularFilesort())
	  )))
	  .pipe(gulp.dest('./'));
});

gulp.task('styles', function () {
    var processors = [
        autoprefixer({browsers: ['last 15 versions'], cascade: false}),
        mqpacker,
        cssnano,
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

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});

gulp.task('files', function() {
	return gulp.src(config.htmlPath +'/**/**.html')
		.pipe(flatten())
		.pipe(gulp.dest('./public'))
		.pipe(livereload());
});

gulp.task('connect', function() {
	connect.server({
		// root: 'public',
    port: 3000,
		livereload: true,
    debug: true
	});
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch(config.htmlPath + '/**/**.html', ['files']);
	gulp.watch(config.sassDir + '/*.scss', ['styles']);
});

gulp.task('install', ['icons', 'index']);
gulp.task('default', ['files' ,'styles' ,'index' ,'watch', 'connect']);
