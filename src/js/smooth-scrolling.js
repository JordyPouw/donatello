(function(){

  'use strict';


  smoothScrolling();

  function smoothScrolling () {
    $('a[href*=#]:not([href=#])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
          location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) { $('body').animate({ scrollTop: target.offset().top }, 1000); }
      }
    });
  }


})();
