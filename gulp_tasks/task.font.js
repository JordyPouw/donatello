module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('font', function () {

    return gulp.src('src/fonts/**/*.{eot,woff2,woff,ttf,svg}')
      .pipe(gulp.dest(config.source.dest.font));

  });


};
