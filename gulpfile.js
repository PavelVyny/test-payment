const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');

const cssFiles = [
	'./src/less/payments.less'
]
const jsFiles = [
	'./src/js/lib.js',
	'./src/js/main.js'
]

function styles() {
	return gulp.src(cssFiles)
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(concat('style.css'))
	.pipe(autoprefixer({
		cascade: false
	}))
	.pipe(cleanCSS({
		level: 2
	}))


	.pipe(gulp.dest('./build/css'))
}

function scripts() {
	return gulp.src(jsFiles)
	.pipe(concat('script.js'))
	.pipe(uglify())


	.pipe(gulp.dest('./build/js'))
}

function clean() {
	return del(['build/*'])
}

function watch() {
	gulp.watch('./src/less/**/*.less', styles)
	gulp.watch('./src/js/**/*.js', scripts)
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task('dev', gulp.series('build', 'watch'));