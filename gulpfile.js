const { watch, series } = require('gulp');
const livereload = require('gulp-livereload');
var concat = require('gulp-concat');

function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

 
// gulp.task('scripts', function() {
//   return gulp.src('./lib/*.js')
//     .pipe(concat('all.js'))
//     .pipe(gulp.dest('./dist/'));
// });

function defaultTask(cb) {
    livereload.listen();
    // You can use a single task
  watch('./*.css', css);
  // Or a composed task
  watch('./*.js', series(clean, javascript));
  }
  
  exports.default = defaultTask