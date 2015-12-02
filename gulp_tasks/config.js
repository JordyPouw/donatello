module.exports = function(gulp){

  'use strict';


  return {
    // plugins.
    browsersync    :   require('browser-sync'),
    browserify     :   require('browserify'),
    babelify       :   require("babelify"),
    autoprefixer   :   require('autoprefixer'),
    vss            :   require('vinyl-source-stream'),
    buffer         :   require('vinyl-buffer'),
    del            :   require('del'),
    plugins        :   require('gulp-load-plugins')({
      rename: {
        'gulp-minify-css': 'cssmin',
        'gulp-main-bower-files': 'bower'
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