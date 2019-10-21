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


var getRandomArrayEntry = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

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


userDialogNode.classList.remove('hidden');

var mockupWizards = createMockupWizards();

var wizardNodes = createWizardNodes(mockupWizards);

renderNodes(similarListNode, wizardNodes);

setupSimilarNode.classList.remove('hidden');
