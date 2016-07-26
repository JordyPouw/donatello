(function(){

  'use strict';


  var form = document.querySelectorAll('.c-form');
  var formControls = document.querySelectorAll('.c-form__control');

  if(form.length) {
    for (var i = 0; i < formControls.length; i++) {
      if (formControls[i].querySelectorAll('[required]').length) {
        formControls[i].classList.add('state-required');
      }
    }
  }


})();
