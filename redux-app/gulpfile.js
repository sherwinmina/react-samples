var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('scripts', function() {
  return gulp.src('./public/app/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./public/build'))
  ;
});

// gulp.task('html', function() {
//   return gulp.src('./public/**/**.html')
//     .pipe(gulp.dest('./build'))
//   ;
// });

gulp.task('css', function() {
  return gulp.src('./public/**/**.css')
    .pipe(gulp.dest('./build'))
  ;
});

gulp.task('default', ['scripts', 'css'], function() {
  gulp.watch('./public/app/**/**.js', ['scripts']);
//  gulp.watch('./public/**/**.html', ['html']);
  gulp.watch('./public/**/**.css', ['css']);
});