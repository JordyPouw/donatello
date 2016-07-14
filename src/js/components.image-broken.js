(function(){

  'use strict';


  var images = document.querySelectorAll('img');

  for (var i = 0; i < images.length; i++) {
    images[i].onerror = function () { this.classList.add('c-image-broken'); };
  }


})();
