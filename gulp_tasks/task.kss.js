module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('kss', config.plugins.shell.task([

    'kss --config kss-config.json',
    'open kss_styleguide/index.html'

  ]));


};