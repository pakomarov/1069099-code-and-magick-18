'use strict';

(function () {
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;


  var setupOpenNode = document.querySelector('.setup-open');
  var setupOpenIconNode = setupOpenNode.querySelector('.setup-open-icon');
  var setupNode = document.querySelector('.setup');
  var setupCloseNode = setupNode.querySelector('.setup-close');
  var setupUserNameNode = setupNode.querySelector('.setup-user-name');


  var openPopup = function () {
    setupNode.classList.remove('hidden');
    document.addEventListener('keydown', documentKeydownEscHandler);
  };

  var closePopup = function () {
    setupNode.classList.add('hidden');
    document.removeEventListener('keydown', documentKeydownEscHandler);
  };


  var setupOpenClickHandler = function () {
    openPopup();
  };

  var setupOpenIconKeydownEnterHandler = function (evt) {
    if (evt.keyCode === KEYCODE_ENTER) {
      openPopup();
    }
  };

  var setupCloseClickHandler = function () {
    closePopup();
  };

  var setupCloseKeydownEnterHandler = function (evt) {
    if (evt.keyCode === KEYCODE_ENTER) {
      closePopup();
    }
  };

  var documentKeydownEscHandler = function (evt) {
    if (evt.keyCode === KEYCODE_ESC && evt.target !== setupUserNameNode) {
      closePopup();
    }
  };


  setupOpenNode.addEventListener('click', setupOpenClickHandler);
  setupOpenIconNode.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
  setupCloseNode.addEventListener('click', setupCloseClickHandler);
  setupCloseNode.addEventListener('keydown', setupCloseKeydownEnterHandler);
})();
