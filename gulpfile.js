// require gulp.
var gulp = require('gulp');

// task for development.
gulp.task('default', ['bower', 'modernizr', 'css', 'js', 'img', 'font', 'sound', 'kss', 'server'], function(){
  gulp.start('watch');
});

// task for auto deploy on production server.
gulp.task('build', ['clean'], function(){
  gulp.start('bower', 'modernizr', 'css', 'js', 'img', 'font', 'sound');
});

// utility function that gets task modules.
function task(task){
  return require('./gulp_tasks/' + task)(gulp);
}

// all task modules.
task('server');
task('browsersync');
task('watch');
task('kss');
task('clean');
task('bower');
task('modernizr');
task('css');
task('js');
task('img');
task('font');
task('sound');