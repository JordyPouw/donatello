(function(){

  'use strict';


  var form = document.querySelectorAll('.c-form');
  var formControls = document.querySelectorAll('.c-form__control');
  var formInputs = document.querySelectorAll('.c-form input, .c-form textarea');
  var formSelects = document.querySelectorAll('.c-form input[type="checkbox"], .c-form input[type="radio"], .c-form select');

  if(form.length) {
    // set class state-required for all the required form controls.
    for (var i = 0; i < formControls.length; i++) {
      if (formControls[i].querySelectorAll('[required]').length) {
        formControls[i].classList.add('state-required');
      }
    }

    // set attribute data-feedback-activated on input after an keyup event.
    for (var i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener('keyup', function (e) {
        this.setAttribute('data-feedback-activated', true);
      });
    }

    // set attribute data-feedback-activated on selectables after a click event.
    for (var i = 0; i < formSelects.length; i++) {
      formSelects[i].addEventListener('click', function (e) {
        this.setAttribute('data-feedback-activated', true);
      });
    }
  }


})();