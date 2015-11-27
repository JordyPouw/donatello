(function() {

  'use strict';


  disableHover();

  function disableHover () {
    var body = $('body'),
        timer;

    window.addEventListener('scroll', function(){
      clearTimeout(timer);
      if(!body.hasClass('u-disable-hover')) {
        body.addClass('u-disable-hover');
      }
      
      timer = setTimeout(function(){
        body.removeClass('u-disable-hover');
      }, 300);
    }, false);
  }


})();