'use strict';

var MOCKUP_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var MOCKUP_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var MOCKUP_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var MOCKUP_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var MOCKUP_WIZARDS_COUNT = 4;


var userDialogNode = document.querySelector('.setup');
var similarWizardTemplateNode = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListNode = document.querySelector('.setup-similar-list');
var setupSimilarNode = document.querySelector('.setup-similar');


var getRandomEntry = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var generateMockupWizardName = function () {
  return getRandomEntry(MOCKUP_NAMES) + ' ' + getRandomEntry(MOCKUP_SURNAMES);
};

var generateMockupCoatColor = function () {
  return getRandomEntry(MOCKUP_COAT_COLORS);
};

var generateMockupEyesColor = function () {
  return getRandomEntry(MOCKUP_EYE_COLORS);
};

var generateMockupWizard = function () {
  return {name: generateMockupWizardName(), coatColor: generateMockupCoatColor(), eyesColor: generateMockupEyesColor()};
};

var generateMockupWizards = function (mockupWizardsCount) {
  var wizards = [];

  for (var i = 0; i < mockupWizardsCount; i++) {
    wizards.push(generateMockupWizard());
  }

  return wizards;
};

var renderWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplateNode.cloneNode('true');

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fillElementWithWizards = function (element, wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizardElement(wizards[i]));
  }

  element.appendChild(fragment);
};

var fillElementWithMockupWizards = function (element) {
  var mockupWizards = generateMockupWizards(MOCKUP_WIZARDS_COUNT);
  fillElementWithWizards(element, mockupWizards);
};


userDialogNode.classList.remove('hidden');

fillElementWithMockupWizards(similarListNode);

setupSimilarNode.classList.remove('hidden');
