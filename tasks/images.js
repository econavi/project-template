/* assets */ 

const gulp = require('gulp');
const newer = require('gulp-newer');
const image = require('gulp-image');


module.exports = () => (
	gulp.src('app/assets/img/**/*.*')
	.pipe(newer('public/assets/img'))
	.pipe(image({
      mozjpeg: false,
      jpegoptim: false,
      jpegRecompress: true
    }))
	.pipe(gulp.dest('public/assets/img'))
)
