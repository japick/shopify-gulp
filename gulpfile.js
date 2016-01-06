var gulp         = require('gulp'),
	watch 	     = require('gulp-watch'),
	gulpShopify  = require('gulp-shopify-upload'),
	cssimport    = require('gulp-cssimport');

var globalConfig = {
  src: 'css'
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
		.pipe(gulpShopify('8e9bcc98402895f0de1a2ea0a5b35e39', '497d357338fdef4f95578a36aaae5f44', 'hopkinson-england.myshopify.com'));
});

// Default task
gulp.task('default', ['watch', 'shopifywatch']);