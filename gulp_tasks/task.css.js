module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var processors = [
    config.cssnext({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'] })
  ];

  gulp.task('css', function(){

    gulp.src('src/css/index.scss')
      .pipe(config.plugins.plumber())
      .pipe(config.plugins.sourcemaps.init())
        .pipe(config.plugins.sass())
        .pipe(config.plugins.postcss(processors))
        .pipe(config.plugins.rename({ basename: 'main' }))
        .pipe(gulp.dest(config.source.tmp))
        .pipe(config.plugins.cssnano())
        .pipe(config.plugins.rename({ suffix: '.min' }))
      .pipe(config.plugins.sourcemaps.write('../../' + config.source.tmp))
      .pipe(gulp.dest(config.source.dest.css))
      .pipe(config.browsersync.reload({ stream: true }));

  });


};
