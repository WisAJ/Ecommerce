var gulp = require ('gulp');
var connect = require ('gulp-connect');




gulp.task('connect', async function() {
  connect.server({
    root:'build',
    livereload:true,
    port:8080,
  })
});

gulp.task('watch', async function() {
  return gulp.watch("src/**/*", gulp.series('build'));
 
});

gulp.task('html', async function () {
  return gulp.src('src/*.html')
  .pipe (gulp.dest('build')).pipe(connect.reload());
});

gulp.task('css', async function () {
  return gulp.src('src/css/*.css')
  .pipe (gulp.dest('build/css')).pipe(connect.reload());
});


gulp.task('js', async function () {
  return gulp.src('src/js/*.js')
  .pipe (gulp.dest('build/js')).pipe(connect.reload());
});

gulp.task('fonts', async function () {
  return gulp.src('src/fonts/*')
  .pipe (gulp.dest('build/fonts')).pipe(connect.reload());
});

gulp.task('images', async function () {
  return gulp.src('src/images/*')
  .pipe (gulp.dest('build/images')).pipe(connect.reload());
});

gulp.task ('build', gulp.series('html','css', 'js', 'images', 'fonts'));

gulp.task('default', gulp.series('build', 'connect', 'watch'));







// gulp.task('watch', function() {
//   console.log("Hello from Gulp!");
//   clean
// });

//  هذه كلها لمعالجة الخطا الذي حصل باللون الاحمر عند كتابة بدون async
// gulp.task('watch', async function() {
//   console.log('Hello');
// });

// gulp.task('watch', function() { 
//   return new Promise(function(resolve, reject) {
//     console.log("Hello");
//     resolve();
//   });
// });

// gulp.task('watch', function(done) {
//    console.log("Hello");
//   done();
// });

// gulp.task('build', function() {
//   return gulp.src('src/**/*')
//   .pipe(gulp.dest('build/'))
// });

