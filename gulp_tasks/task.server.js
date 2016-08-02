module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var path = require('path');

  gulp.task('server', function () {

    config.plugins.connect.server({
      name: 'Server',
      root: path.resolve('./'),
      port: 8000
    });

  });


};
