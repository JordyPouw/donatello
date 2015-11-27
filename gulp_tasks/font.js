module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('font', function(){

    return gulp.src('src/fonts/**/*')
      .pipe(gulp.dest(config.source.dest.font));

  });


};