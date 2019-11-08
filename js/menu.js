'use strict';


(function () {
  var setupOpenNode = document.querySelector('.setup-open');
  var setupOpenIconNode = setupOpenNode.querySelector('.setup-open-icon');
  var setupNode = document.querySelector('.setup');
  var setupCloseNode = setupNode.querySelector('.setup-close');
  var setupUserNameNode = setupNode.querySelector('.setup-user-name');
  var uploadNode = setupNode.querySelector('.upload');
  var formNode = setupNode.querySelector('.setup-wizard-form');


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

  var uploadNodeMouseDownHandler = function (evt) {
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;


    var documentMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupNode.style.top = (setupNode.offsetTop - shift.y) + 'px';
      setupNode.style.left = (setupNode.offsetLeft - shift.x) + 'px';
    };

    var documentMouseUpHandler = function (upEvt) {
      var uploadNodeClickHandler = function (clickEvt) {
        clickEvt.preventDefault();
        uploadNode.removeEventListener('click', uploadNodeClickHandler);
      };

      upEvt.preventDefault();

      document.removeEventListener('mousemove', documentMouseMoveHandler);
      document.removeEventListener('mouseup', documentMouseUpHandler);

      if (dragged) {
        uploadNode.addEventListener('click', uploadNodeClickHandler);
      }
    };


    evt.preventDefault();
    document.addEventListener('mousemove', documentMouseMoveHandler);
    document.addEventListener('mouseup', documentMouseUpHandler);
  };

  var onLoad = function () {
    closePopup();
  };

  var onError = function (error) {
    window.error.showWarning(error);
  };

  var submitHandler = function (evt) {
    var formData = new FormData(formNode);
    window.backend.save(onLoad, onError, formData);
    evt.preventDefault();
  };

  var setup = function () {
    setupOpenNode.addEventListener('click', setupOpenClickHandler);
    setupOpenIconNode.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
    setupCloseNode.addEventListener('click', setupCloseClickHandler);
    setupCloseNode.addEventListener('keydown', setupCloseKeydownEnterHandler);
    uploadNode.addEventListener('mousedown', uploadNodeMouseDownHandler);
    formNode.addEventListener('submit', submitHandler);
  };


  window.menu = {
    setup: setup
  };
})();
