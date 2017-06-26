/* serve */

const gulp = require('gulp');
const browserSync = require('browser-sync').create();


module.exports = () => {
	browserSync.init({
		server: 'public',
		tunnel: true,
  		host: 'localhost',
  		port: 9000
	});
	browserSync.watch('public/**/*.*').on('change', browserSync.reload)
};