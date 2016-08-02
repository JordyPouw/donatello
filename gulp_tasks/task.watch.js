module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('watch', ['browsersync'], function () {

    gulp.watch('bower.json', ['bower']);
    gulp.watch('index.html').on('change', config.browsersync.reload);
    gulp.watch('src/css/**/*.scss', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/fonts/**/*.{eot,woff2,woff,ttf,svg}', ['font']);
    gulp.watch('src/sounds/**/*.{mp3,ogg}', ['sound']);
    gulp.watch('src/img/**/*.{jpg,png}', ['img']);

  });


};
