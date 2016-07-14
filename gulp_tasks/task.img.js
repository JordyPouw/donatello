module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('img', function () {

    return gulp.src('src/img/**/*')
      .pipe(config.plugins.imagemin({optimizationLevel: 6, progressive: true, interlaced: true}))
      .pipe(gulp.dest(config.source.dest.img));

  });


};