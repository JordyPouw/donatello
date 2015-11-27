module.exports = function(gulp){

  'use strict';


  var config = require('./config')();
  var dirs = [
                config.source.dest.css,
                config.source.dest.js,
                config.source.dest.img,
                config.source.dest.font,
                config.source.dest.sound,
                config.source.tmp
             ];

  gulp.task('clean', function(callback){

    config.del(dirs, callback);

  });


};