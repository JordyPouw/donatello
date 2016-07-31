module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  // html is the path of your base file with all the asset requests.
  // inside your base file add the following query behidn your assets:
  // ?rev=@@hash
  var html = 'index.html';

  gulp.task('rev', function () {

    return gulp.src(html)
      .pipe(config.plugins.rev())
      .pipe(gulp.dest('./'));

  });


};
