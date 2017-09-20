var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//this is a simple sample task
gulp.task('task-name', function() {
//Task stuff goes here
	console.log('Hello!');
});

//compile any .scss files in /app/scss and save to dist/css
gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss') //source file(s), *.scss is a glob
	.pipe(sass()) //run sass
	.pipe(gulp.dest('app/css')); //output file(s)
});

gulp.task('concat', function() {
	return gulp.src('app/css/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dist/css'))
});
