var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('default', () => {
  // js
  gulp.src([
    'bower_components/angular/angular.min.js',
    'bower_components/angular-resource/angular-resource.min.js',
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js'
  ])
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('public/dist'))

  gulp.src([
    'public/javascripts/app/app.js',
    'public/javascripts/app/services/*.js',
    'public/javascripts/app/controllers/*.js'
  ])
    .pipe(concat('app.js', {newLine: ';'}))
    .pipe(gulp.dest('public/dist'))
  //

  //css
  gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.css'
  ])
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest('public/dist'))

  gulp.src('public/stylesheets/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('public/dist'))
  //

});

gulp.task('watch', () => {
  return gulp.watch('public/javascripts/**/**/*.js', ['default'])
})
