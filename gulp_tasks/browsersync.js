module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('browsersync', function(){

    config.browsersync({
      proxy:          'http://localhost:8000',
      files:          [
                        'dest/css/main.css',
                        'dest/js/main.js',
                        'dest/css/vendor.css',
                        'dest/js/vendor.js',
                      ],
      logPrefix:      'Donatello',
      logConnections: true,
    });

  });


};