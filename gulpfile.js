var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

//this is a simple sample task
gulp.task('task-name', function() {
//Task stuff goes here
	console.log('Hello!');
});

//compile any .scss files in /app/scss and save to dist/css
gulp.task('sass', ['cleanup'], function() {
	return gulp.src('app/scss/*.scss') //source file(s), *.scss is a glob
	.pipe(sass()) //run sass
	.pipe(gulp.dest('app/css')); //output file(s)
});

//concatenate files into one and clean up old files
gulp.task('concat', ['sass'], function() {
	return gulp.src('app/css/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dist/css'))
});


//cleanup task
gulp.task('cleanup', function() {
	return gulp.src('app/css/*.css', {read: false})
	.pipe(clean());
})

//chain sass and concat together

gulp.task('doit', ['cleanup', 'sass', 'concat']);

//watch scss folder and runauto when files change

gulp.task('watch', function() {
	gulp.watch('app/scss/*.scss', ['doit']);
})

