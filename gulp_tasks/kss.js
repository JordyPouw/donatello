module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('kss', config.plugins.shell.task([

    'kss-node --config kss-config.json',
    'open kss_styleguide/styleguide/index.html'
    
  ]));


};