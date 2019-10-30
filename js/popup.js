'use strict';


(function () {
  var setupOpenNode = document.querySelector('.setup-open');
  var setupOpenIconNode = setupOpenNode.querySelector('.setup-open-icon');
  var setupNode = document.querySelector('.setup');
  var setupCloseNode = setupNode.querySelector('.setup-close');
  var setupUserNameNode = setupNode.querySelector('.setup-user-name');


  var popupOriginCoords = {};

  var savePopupOrigin = function () {
    popupOriginCoords.x = setupNode.offsetLeft;
    popupOriginCoords.y = setupNode.offsetTop;
  };

  var resetPopupOrigin = function () {
    setupNode.style.left = popupOriginCoords.x + 'px';
    setupNode.style.top = popupOriginCoords.y + 'px';
  };

  var openPopup = function () {
    setupNode.classList.remove('hidden');
    document.addEventListener('keydown', documentKeydownEscHandler);
    savePopupOrigin();
  };

  var closePopup = function () {
    setupNode.classList.add('hidden');
    document.removeEventListener('keydown', documentKeydownEscHandler);
    resetPopupOrigin();
  };


  var setupOpenClickHandler = function () {
    openPopup();
  };

  var setupOpenIconKeydownEnterHandler = function (evt) {
    if (evt.keyCode === window.utilities.KEYCODE_ENTER) {
      openPopup();
    }
  };

  var setupCloseClickHandler = function () {
    closePopup();
  };

  var setupCloseKeydownEnterHandler = function (evt) {
    if (evt.keyCode === window.utilities.KEYCODE_ENTER) {
      closePopup();
    }
  };

  var documentKeydownEscHandler = function (evt) {
    if (evt.keyCode === window.utilities.KEYCODE_ESC && evt.target !== setupUserNameNode) {
      closePopup();
    }
  };


  setupOpenNode.addEventListener('click', setupOpenClickHandler);
  setupOpenIconNode.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
  setupCloseNode.addEventListener('click', setupCloseClickHandler);
  setupCloseNode.addEventListener('keydown', setupCloseKeydownEnterHandler);
})();
