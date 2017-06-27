/* build */

const gulp = require('gulp');


module.exports = gulp.series(
	'clean',
	gulp.parallel(
		'html',
		'styles',
		'scripts',
		'iconsSvg',
		'iconsPng',
		'fonts',
		'images',
		'misc'
	)
);