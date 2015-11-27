module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('bower', function(){

    var filterJS = config.plugins.filter('**/*.js', {restore: true});
    var filterCSS = config.plugins.filter('**/*.css', {restore: true});
    var filterIMG = config.plugins.filter(['**/*.png', '**/*.jpg']);
    gulp.src('bower.json')
      .pipe(config.plugins.plumber())
      .pipe(config.plugins.bower({
        overrides: {
          'modernizr': {
            ignore: true
          }
        }
      }))
      .pipe(filterJS)
      .pipe(config.plugins.concat('vendor.js'))
      .pipe(gulp.dest(config.source.tmp))
      .pipe(config.plugins.uglify())
      .pipe(config.plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest(config.source.dest.js))
      .pipe(filterJS.restore)
      .pipe(filterCSS)
      .pipe(config.plugins.concat('vendor.css'))
      .pipe(gulp.dest(config.source.tmp))      
      .pipe(config.plugins.cssmin())
      .pipe(config.plugins.rename({suffix: '.min'}))
      .pipe(gulp.dest(config.source.dest.css))
      .pipe(filterCSS.restore)
      .pipe(filterIMG)
      .pipe(gulp.dest(config.source.dest.img));

  });


};