var gulp         = require('gulp'),
	watch 	     = require('gulp-watch'),
	gulpShopify  = require('gulp-shopify-upload'),
	cssimport    = require('gulp-cssimport');

var globalConfig = {
  src: 'css' // Working stylesheet directory (note: no trailing slash)
};

// Styles task
gulp.task('styles', function(){
  return gulp.src(globalConfig.src + '/theme.scss.liquid')
    .pipe(cssimport())
    .pipe(gulp.dest('assets/'));
});

// Watch files
gulp.task('watch', function () {
	gulp.watch(globalConfig.src + '/**/*.*', ['styles']);
});

// Shopify task
gulp.task('shopifywatch', function() {
	return watch('./+(assets|layout|config|snippets|templates|locales)/**')
		.pipe(gulpShopify('API_KEY', 'PASSWORD', 'YOUR_SITE.myshopify.com'));
});

// Default task
gulp.task('default', ['watch', 'shopifywatch']);