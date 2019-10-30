'use strict';


// Блок констант
var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;


// Поиск DOM-элементов
var setupOpenNode = document.querySelector('.setup-open');
var setupOpenIconNode = setupOpenNode.querySelector('.setup-open-icon');
var setupNode = document.querySelector('.setup');
var setupUserNameNode = setupNode.querySelector('.setup-user-name');
var setupCloseNode = setupNode.querySelector('.setup-close');
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


// Бизнес логика

var openPopup = function () {
  setupNode.classList.remove('hidden');
  document.addEventListener('keydown', documentKeydownEscHandler);
};

var closePopup = function () {
  setupNode.classList.add('hidden');
  document.removeEventListener('keydown', documentKeydownEscHandler);
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


// Обработчики событий
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

var setupWizardCoatVisualClickHandler = function () {
  changeCustomWizardCoatColor();
};

var setupWizardEyesVisualClickHandler = function () {
  changeCustomWizardEyesColor();
};

var setupWizardFireballVisualClickHandler = function () {
  changeCustomFireballColor();
};


setupOpenNode.addEventListener('click', setupOpenClickHandler);
setupOpenIconNode.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
setupCloseNode.addEventListener('click', setupCloseClickHandler);
setupCloseNode.addEventListener('keydown', setupCloseKeydownEnterHandler);
setupWizardCoatVisualNode.addEventListener('click', setupWizardCoatVisualClickHandler);
setupWizardEyesVisualNode.addEventListener('click', setupWizardEyesVisualClickHandler);
setupWizardFireballVisualNode.addEventListener('click', setupWizardFireballVisualClickHandler);
