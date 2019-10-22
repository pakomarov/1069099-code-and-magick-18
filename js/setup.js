'use strict';


// Блок констант
var KEYCODE_ESC = 27;
var KEYCODE_ENTER = 13;
var MOCKUP_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var MOCKUP_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var MOCKUP_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var MOCKUP_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var MOCKUP_WIZARDS_COUNT = 4;


// Поиск DOM-элементов
var setupOpenNode = document.querySelector('.setup-open');
var setupOpenIconNode = setupOpenNode.querySelector('.setup-open-icon');
var setupNode = document.querySelector('.setup');
var setupUserNameNode = setupNode.querySelector('.setup-user-name');
var setupCloseNode = setupNode.querySelector('.setup-close');
var similarWizardTemplateNode = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListNode = document.querySelector('.setup-similar-list');
var setupSimilarNode = document.querySelector('.setup-similar');


// Вспомогательные функции
var getRandomArrayEntry = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};


// Моки
var createMockupWizardName = function () {
  return getRandomArrayEntry(MOCKUP_NAMES) + ' ' + getRandomArrayEntry(MOCKUP_SURNAMES);
};

var createMockupCoatColor = function () {
  return getRandomArrayEntry(MOCKUP_COAT_COLORS);
};

var createMockupEyesColor = function () {
  return getRandomArrayEntry(MOCKUP_EYE_COLORS);
};

var createMockupWizard = function () {
  return {
    name: createMockupWizardName(),
    coatColor: createMockupCoatColor(),
    eyesColor: createMockupEyesColor()
  };
};

var createMockupWizards = function () {
  var mockupWizards = [];

  for (var i = 0; i < MOCKUP_WIZARDS_COUNT; i++) {
    mockupWizards.push(createMockupWizard());
  }

  return mockupWizards;
};


// Бизнес логика
var createWizardNode = function (wizard) {
  var newWizardNode = similarWizardTemplateNode.cloneNode('true');

  newWizardNode.querySelector('.setup-similar-label').textContent = wizard.name;
  newWizardNode.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  newWizardNode.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return newWizardNode;
};

var createWizardNodes = function (wizards) {
  return wizards.map(createWizardNode);
};

var renderNodes = function (targetNode, nodes) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < nodes.length; i++) {
    fragment.appendChild(nodes[i]);
  }

  targetNode.appendChild(fragment);
};

var openPopup = function () {
  setupNode.classList.remove('hidden');
  document.addEventListener('keydown', documentKeydownEscHandler);
};

var closePopup = function () {
  setupNode.classList.add('hidden');
  document.removeEventListener('keydown', documentKeydownEscHandler);
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


var mockupWizards = createMockupWizards();
var wizardNodes = createWizardNodes(mockupWizards);
renderNodes(similarListNode, wizardNodes);
setupSimilarNode.classList.remove('hidden');

setupOpenNode.addEventListener('click', setupOpenClickHandler);
setupOpenIconNode.addEventListener('keydown', setupOpenIconKeydownEnterHandler);
setupCloseNode.addEventListener('click', setupCloseClickHandler);
setupCloseNode.addEventListener('keydown', setupCloseKeydownEnterHandler);
