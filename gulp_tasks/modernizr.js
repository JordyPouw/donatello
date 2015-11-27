module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('modernizr', function(){

    gulp.src('bower_components/modernizr/modernizr.js')
      .pipe(config.plugins.plumber())
      .pipe(gulp.dest(config.source.tmp))
      .pipe(config.plugins.uglify())
      .pipe(config.plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest(config.source.dest.js));

  });


};