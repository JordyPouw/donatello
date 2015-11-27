module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('watch', ['browsersync'], function(){

    gulp.watch('bower.json', ['bower']);
    gulp.watch('views/**/*.html').on('change', config.browsersync.reload);
    gulp.watch('src/css/**/*.scss', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);

  });


};