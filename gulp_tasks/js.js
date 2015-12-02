module.exports = function(gulp){

  'use strict';

  
  var config = require('./config')();

  gulp.task('js', function(){

    config.browserify({
      entries: 'src/js/index.js',
      debug: true
    })
      .transform(config.babelify, {presets: ["es2015"]})
      .bundle()
      .pipe(config.vss('main.js'))
      .pipe(gulp.dest(config.source.tmp))
      .pipe(config.buffer())
      .pipe(config.plugins.sourcemaps.init({loadMaps: true}))
        .pipe(config.plugins.rename({suffix: '.min'}))
        .pipe(config.plugins.uglify())
      .pipe(config.plugins.sourcemaps.write('../../' + config.source.tmp))
      .pipe(gulp.dest(config.source.dest.js));

  });


};