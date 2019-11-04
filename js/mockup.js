'use strict';


(function () {
  var MOCKUP_WIZARDS_COUNT = 4;
  var MOCKUP_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var MOCKUP_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];


  var getRandomValidCoatColor = function () {
    return window.utilities.getRandomArrayEntry(window.rules.VALID_COAT_COLORS);
  };

  var getRandomValidEyesColor = function () {
    return window.utilities.getRandomArrayEntry(window.rules.VALID_EYES_COLORS);
  };

  var createMockupWizardName = function () {
    return window.utilities.getRandomArrayEntry(MOCKUP_NAMES) + ' ' + window.utilities.getRandomArrayEntry(MOCKUP_SURNAMES);
  };

  var createMockupCoatColor = function () {
    return getRandomValidCoatColor();
  };

  var createMockupEyesColor = function () {
    return getRandomValidEyesColor();
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


  window.mockup = {
    createMockupWizards: createMockupWizards
  };
})();
