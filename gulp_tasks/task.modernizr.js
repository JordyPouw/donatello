module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var fs = require('fs');
  var path = require('path');

  var mkdirSync = function (path) {
    try {
      fs.mkdirSync(path);
    } catch (e) {
      if ( e.code != 'EEXIST' ) throw e;
    }
  };

  // for all available settings:
  // https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
  var settings = {
    "options": [],
    "feature-detects": []
  };

  gulp.task('modernizr', function() {

    mkdirSync(path.join(config.source.tmp));

    config.modernizr.build(settings, function (result) {
      fs.writeFile(config.source.tmp + 'modernizr.js', result, function (err) {
        if (err) { return console.log(err); }

        gulp.src(config.source.tmp + 'modernizr.js')
          .pipe(config.plugins.uglify())
          .pipe(config.plugins.rename({suffix: '.min'}))
          .pipe(gulp.dest(config.source.dest.js));
      });
    });

  });


};