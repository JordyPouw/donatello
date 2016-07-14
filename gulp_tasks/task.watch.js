module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('watch', ['server', 'browsersync'], function () {

    gulp.watch('bower.json', ['bower']);
    gulp.watch('index.html').on('change', config.browsersync.reload);
    gulp.watch('src/css/**/*.scss', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);

  });


};