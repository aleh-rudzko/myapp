var gulp = require('gulp');
var concat = require('gulp-concat');

var vendorsScriptsGlobs = [
  'bower_components/angular/angular.min.js'
]

var distScriptsGlobs = [
  'public/javascripts/app/app.js',
  'public/javascripts/app/controllers/users.js'
]

gulp.task('default', () => {
  gulp.src(vendorsScriptsGlobs)
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('public/javascripts'))

  gulp.src(distScriptsGlobs)
    .pipe(concat('dist.js'))
    .pipe(gulp.dest('public/javascripts'))
})
