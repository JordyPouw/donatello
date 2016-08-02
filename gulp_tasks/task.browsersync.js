module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('browsersync', function(){

    config.browsersync({
      proxy: 'http://localhost:8000',
      files: [
        'dest/css/vendor.css',
        'dest/css/main.css',
        'dest/js/vendor.js',
        'dest/js/main.js',
      ],
      logPrefix: 'Donatello',
      logConnections: true,
    });

  });


};
