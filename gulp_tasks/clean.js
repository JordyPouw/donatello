module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('clean', function(callback){

    config.del(['dest/', 'tmp/'], callback);

  });


};