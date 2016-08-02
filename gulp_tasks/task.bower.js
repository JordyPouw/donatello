module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var filterJS = config.plugins.filter('**/*.js', { restore: true });
  var filterCSS = config.plugins.filter('**/*.css', { restore: true });
  var filterIMG = config.plugins.filter(['**/*.png', '**/*.jpg', '**/*.svg']);

  gulp.task('bower', function(){

    gulp.src('bower.json')
      .pipe(config.plugins.plumber())
      .pipe(config.plugins.bower({
        overrides: {}
      }))
      .pipe(filterJS)
        .pipe(config.plugins.concat('vendor.js'))
        .pipe(gulp.dest(config.source.tmp))
        .pipe(config.plugins.uglify())
        .pipe(config.plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.source.dest.js))
        .pipe(filterJS.restore)
      .pipe(filterCSS)
        .pipe(config.plugins.concat('vendor.css'))
        .pipe(gulp.dest(config.source.tmp))
        .pipe(config.plugins.cssnano())
        .pipe(config.plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.source.dest.css))
        .pipe(filterCSS.restore)
      .pipe(filterIMG)
        .pipe(gulp.dest(config.source.dest.img));

  });


};
