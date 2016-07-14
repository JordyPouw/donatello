(function() {

  'use strict';


  disableHover();

  function disableHover () {
    var timer;

    window.addEventListener('scroll', function () {
      clearTimeout(timer);

      if(!document.body.classList.contains('u-disable-hover')) {
        document.body.classList.add('u-disable-hover');
      }

      timer = setTimeout(function () {
        document.body.classList.remove('u-disable-hover');
      }, 300);
    }, false);
  }


})();
