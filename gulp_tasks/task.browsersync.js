module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('browsersync', function(){

    config.browsersync({
      proxy: 'http://localhost:8000',
      files: [
        'dest/css/vendor.css',
        'dest/js/vendor.js',
        'dest/css/main.css',
        'dest/js/main.js',
      ],
      logPrefix: 'Donatello',
      logConnections: true,
    });

  });


};
