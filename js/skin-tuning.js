'use strict';


(function () {
  var setupNode = document.querySelector('.setup');
  var setupWizardCoatVisualNode = setupNode.querySelector('.setup-wizard .wizard-coat');
  var setupWizardCoatInputNode = setupNode.querySelector('.setup-wizard-appearance input[name="coat-color"]');
  var setupWizardEyesVisualNode = setupNode.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardEyesInputNode = setupNode.querySelector('.setup-wizard-appearance input[name="eyes-color"]');
  var setupWizardFireballVisualNode = setupNode.querySelector('.setup-player .setup-fireball-wrap');
  var setupWizardFireballInputNode = setupWizardFireballVisualNode.querySelector('input');


  var getRandomValidCoatColor = function () {
    return window.utilities.getRandomArrayEntry(window.rules.VALID_COAT_COLORS);
  };

  var getRandomValidEyesColor = function () {
    return window.utilities.getRandomArrayEntry(window.rules.VALID_EYES_COLORS);
  };

  var getRandomValidFireballColor = function () {
    return window.utilities.getRandomArrayEntry(window.rules.VALID_FIREBALL_COLORS);
  };

  var changeCustomWizardCoatColor = function () {
    var newCoatColor = getRandomValidCoatColor();

    setupWizardCoatVisualNode.style.fill = newCoatColor;
    setupWizardCoatInputNode.value = newCoatColor;
  };

  var changeCustomWizardEyesColor = function () {
    var newEyesColor = getRandomValidEyesColor();

    setupWizardEyesVisualNode.style.fill = newEyesColor;
    setupWizardEyesInputNode.value = newEyesColor;
  };

  var changeCustomFireballColor = function () {
    var newFireballColor = getRandomValidFireballColor();

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
