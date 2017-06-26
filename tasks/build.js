/* build */

const gulp = require('gulp');


module.exports = gulp.series(
	'clean',
	gulp.parallel(
		'html',
		'styles',
		'scripts',
		'iconsSvg',
		'fonts',
		'images',
		'misc'
	)
);