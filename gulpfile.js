// require gulp.
var gulp = require('gulp');

// task for development.
gulp.task('default', ['bower', 'css', 'js', 'img', 'font', 'sound', 'modernizr', 'kss'], function () {
  gulp.start('watch');
});

// task for auto deploy on production server.
gulp.task('build', ['clean'], function () {
  gulp.start('bower', 'css', 'js', 'img', 'font', 'sound', 'modernizr');
});

// utility function that gets task modules.
function task(task){
  return require('./gulp_tasks/' + task)(gulp);
}

// all task modules.
task('clean');
task('bower');
task('css');
task('js');
task('img');
task('font');
task('sound');
task('modernizr');
task('kss');
task('server');
task('browsersync');
task('watch');