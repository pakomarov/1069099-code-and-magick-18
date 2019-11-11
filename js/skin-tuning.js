'use strict';


(function () {
  var setupNode = document.querySelector('.setup');
  var setupWizardCoatVisualNode = setupNode.querySelector('.setup-wizard .wizard-coat');
  var setupWizardCoatInputNode = setupNode.querySelector('.setup-wizard-appearance input[name="coat-color"]');
  var setupWizardEyesVisualNode = setupNode.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardEyesInputNode = setupNode.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
  var setupWizardFireballVisualNode = setupNode.querySelector('.setup-player .setup-fireball-wrap');
  var setupWizardFireballInputNode = setupWizardFireballVisualNode.querySelector('input');


  var currentCoatColor = setupWizardCoatVisualNode.style.fill;
  var currentEyeColor = setupWizardEyesVisualNode.style.fill;
  // Необходимо конвертировать, т.к. свойство backgroundColor всегда хранится в rgb формате
  var currentFireballColor = window.hexRgbConverter.convertRgbToHex(setupWizardFireballVisualNode.style.backgroundColor);
  var onCoatChange = function () {};
  var onEyesChange = function () {};


  var getDifferentValidCoatColor = function (coatColor) {
    return window.utilities.getDifferentArrayEntry(window.rules.VALID_COAT_COLORS, coatColor);
  };

  var getDifferentValidEyeColor = function (eyeColor) {
    return window.utilities.getDifferentArrayEntry(window.rules.VALID_EYE_COLORS, eyeColor);
  };

  var getDifferentValidFireballColor = function (fireballColor) {
    return window.utilities.getDifferentArrayEntry(window.rules.VALID_FIREBALL_COLORS, fireballColor);
  };

  var changeCustomWizardCoatColor = function () {
    var newCoatColor = getDifferentValidCoatColor(currentCoatColor);

    setupWizardCoatVisualNode.style.fill = newCoatColor;
    setupWizardCoatInputNode.value = newCoatColor;
    currentCoatColor = newCoatColor;
    onCoatChange();
  };

  var changeCustomWizardEyeColor = function () {
    var newEyeColor = getDifferentValidEyeColor(currentEyeColor);

    setupWizardEyesVisualNode.style.fill = newEyeColor;
    setupWizardEyesInputNode.value = newEyeColor;
    currentEyeColor = newEyeColor;
    onEyesChange();
  };

  var changeCustomFireballColor = function () {
    var newFireballColor = getDifferentValidFireballColor(currentFireballColor);

    setupWizardFireballVisualNode.style.backgroundColor = newFireballColor;
    setupWizardFireballInputNode.value = newFireballColor;
    currentFireballColor = newFireballColor;
  };


  var setupWizardCoatVisualClickHandler = function () {
    changeCustomWizardCoatColor();
  };

  var setupWizardEyesVisualClickHandler = function () {
    changeCustomWizardEyeColor();
  };

  var setupWizardFireballVisualClickHandler = function () {
    changeCustomFireballColor();
  };


  var setup = function () {
    setupWizardCoatVisualNode.addEventListener('click', setupWizardCoatVisualClickHandler);
    setupWizardEyesVisualNode.addEventListener('click', setupWizardEyesVisualClickHandler);
    setupWizardFireballVisualNode.addEventListener('click', setupWizardFireballVisualClickHandler);
  };

  var addCoatChangeListener = function (callback) {
    onCoatChange = callback;
  };

  var addEyesChangeListener = function (callback) {
    onEyesChange = callback;
  };

  var getCurrentCoatColor = function () {
    return currentCoatColor;
  };

  var getCurrentEyeColor = function () {
    return currentEyeColor;
  };


  window.skinTuning = {
    setup: setup,
    getCurrentCoatColor: getCurrentCoatColor,
    getCurrentEyeColor: getCurrentEyeColor,
    addCoatChangeListener: addCoatChangeListener,
    addEyesChangeListener: addEyesChangeListener
  };
})();
