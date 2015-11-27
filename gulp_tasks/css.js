module.exports = function(gulp){

  'use strict';


  var config = require('./config')();

  gulp.task('css', function(){

    gulp.src('src/css/index.scss')
      .pipe(config.plugins.plumber())
      .pipe(config.plugins.sourcemaps.init())
        .pipe(config.plugins.sass())
        .pipe(config.plugins.postcss([
          config.autoprefixer({
            browsers: ['> 1%','last 3 versions']
          })
        ]))
        .pipe(config.plugins.rename({basename: 'main'}))
        .pipe(gulp.dest(config.source.tmp))
        .pipe(config.plugins.cssmin())
        .pipe(config.plugins.rename({suffix: '.min'}))
      .pipe(config.plugins.sourcemaps.write('../../' + config.source.tmp))
      .pipe(gulp.dest(config.source.dest.css))
      .pipe(config.browsersync.reload({stream: true}));

  });


};