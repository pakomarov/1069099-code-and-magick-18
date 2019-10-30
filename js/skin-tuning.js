'use strict';


(function () {
  var setupNode = document.querySelector('.setup');
  var setupWizardCoatVisualNode = setupNode.querySelector('.setup-wizard .wizard-coat');
  var setupWizardCoatInputNode = setupNode.querySelector('.setup-wizard-appearance input[name="coat-color"]');
  var setupWizardEyesVisualNode = setupNode.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardEyesInputNode = setupNode.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
  var setupWizardFireballVisualNode = setupNode.querySelector('.setup-player .setup-fireball-wrap');
  var setupWizardFireballInputNode = setupWizardFireballVisualNode.querySelector('input');


  var getDifferentValidCoatColor = function (coatColor) {
    return window.utilities.getDifferentArrayEntry(window.rules.VALID_COAT_COLORS, coatColor);
  };

  var getDifferentValidEyesColor = function (eyesColor) {
    return window.utilities.getDifferentArrayEntry(window.rules.VALID_EYES_COLORS, eyesColor);
  };

  var getDifferentValidFireballColor = function (fireballColor) {
    return window.utilities.getDifferentArrayEntry(window.rules.VALID_FIREBALL_COLORS, fireballColor);
  };

  var changeCustomWizardCoatColor = function () {
    var oldCoatColor = setupWizardCoatVisualNode.style.fill;
    var newCoatColor = getDifferentValidCoatColor(oldCoatColor);

    setupWizardCoatVisualNode.style.fill = newCoatColor;
    setupWizardCoatInputNode.value = newCoatColor;
  };

  var changeCustomWizardEyesColor = function () {
    var oldEyesColor = setupWizardEyesVisualNode.style.fill;
    var newEyesColor = getDifferentValidEyesColor(oldEyesColor);

    setupWizardEyesVisualNode.style.fill = newEyesColor;
    setupWizardEyesInputNode.value = newEyesColor;
  };

  var changeCustomFireballColor = function () {
    // .style.backgroundColor всегда представлен в rgb, поэтому хотя исходные цвета для фаербола представлены в hex, при добавлении в DOM их значения автоматически приводятся к rgb
    var oldFireballColorInRgb = setupWizardFireballVisualNode.style.backgroundColor;
    // Для корректного сравнения текущего цвета фаербола с исходными данными по валидным цветам фаербола необходимо привести текущий цвет из rgb обратно в hex
    var oldFireballColorInHex = window.utilities.convertRgbToHex(oldFireballColorInRgb);
    var newFireballColor = getDifferentValidFireballColor(oldFireballColorInHex);

    setupWizardFireballVisualNode.style.backgroundColor = newFireballColor;
    setupWizardFireballInputNode.value = newFireballColor;
  };


  var setupWizardCoatVisualClickHandler = function () {
    changeCustomWizardCoatColor();
  };

  var setupWizardEyesVisualClickHandler = function () {
    changeCustomWizardEyesColor();
  };

  var setupWizardFireballVisualClickHandler = function () {
    changeCustomFireballColor();
  };


  setupWizardCoatVisualNode.addEventListener('click', setupWizardCoatVisualClickHandler);
  setupWizardEyesVisualNode.addEventListener('click', setupWizardEyesVisualClickHandler);
  setupWizardFireballVisualNode.addEventListener('click', setupWizardFireballVisualClickHandler);
})();
