module.exports = function (gulp) {

  'use strict';


  return {
    // packages.
    browserify     : require('browserify'),
    babelify       : require("babelify"),
    vss            : require('vinyl-source-stream'),
    buffer         : require('vinyl-buffer'),
    cssnext        : require('postcss-cssnext'),
    autoprefixer   : require('autoprefixer'),
    browsersync    : require('browser-sync'),
    del            : require('del'),
    modernizr      : require('modernizr'),
    imagemin       : require('imagemin'),
    mozjpeg        : require('imagemin-mozjpeg'),
    pngquant       : require('imagemin-pngquant'),
    plugins        : require('gulp-load-plugins')({
      rename: {
        'gulp-main-bower-files': 'bower',
        'gulp-rev-append': 'rev'
      }
    }),

    // temporary and destination directories.
    source: {
      tmp        : 'tmp/',
      dest: {
        css      : 'dest/css/',
        js       : 'dest/js/',
        img      : 'dest/img/',
        font     : 'dest/font/',
        sound    : 'dest/sound/',
      }
    }
  };


};
