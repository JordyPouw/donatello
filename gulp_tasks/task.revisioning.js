module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var assets = [
    config.source.dest.css + '*.css',
    config.source.dest.js + '*.js',
  ];

  gulp.task('revisioning', function () {

    return gulp.src(config.source.dest.css + '*.css')
      .pipe(config.plugins.rev())
      .pipe(gulp.dest(config.source.dest.css))
      .pipe(config.plugins.rev.manifest({
        merge: true,
        base: './'
      }))
      .pipe(gulp.dest('./'));

  });


  gulp.task('collect', function () {

    return gulp.src(['rev-manifest.json', 'index.html'])
      .pipe(config.plugins.collect())
      .pipe(gulp.dest('./'));

  });


};
