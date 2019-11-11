'use strict';


(function () {
  var HIDING_CLASS = 'hidden';
  var RENDERING_COUNT = 4;
  var ERROR_MESSAGE = 'К сожалению, у нас возникли неполадки. Попробуйте повторить запрос позднее.';
  var DEBOUNCE_INTERVAL = 500;


  var similarListNode = document.querySelector('.setup-similar-list');
  var setupSimilarNode = document.querySelector('.setup-similar');


  var storedWizards = [];


  var getRank = function (wizard) {
    var rank = 0;

    if (window.skinTuning.getCurrentCoatColor() === wizard.colorCoat) {
      rank += 2;
    }
    if (window.skinTuning.getCurrentEyeColor() === wizard.colorEyes) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    return left - right;
  };

  var compareSimilarityRanks = function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = namesComparator(left.name, right.name);
    }
    return rankDiff;
  };

  var renderSimilarWizards = function () {
    var similarWizardNodes = storedWizards
      .slice()
      .sort(compareSimilarityRanks)
      .slice(0, RENDERING_COUNT)
      .map(window.wizard.createWizardNode);
    similarListNode.innerHTML = '';
    window.utilities.renderNodes(similarListNode, similarWizardNodes);
    setupSimilarNode.classList.remove(HIDING_CLASS);
  };


  var onLoad = function (data) {
    if (data === null || !Array.isArray(data)) {
      window.error.showWarning(ERROR_MESSAGE);
      return;
    }

    storedWizards = data;
    renderSimilarWizards();
  };

  var onError = function (error) {
    window.error.showWarning(error);
  };

  var updateWizards = window.utilities.debounce(renderSimilarWizards, DEBOUNCE_INTERVAL);

  var setup = function () {
    window.backend.load(onLoad, onError);
    window.skinTuning.addCoatChangeListener(updateWizards);
    window.skinTuning.addEyesChangeListener(updateWizards);
  };


  window.similarWizards = {
    setup: setup
  };
})();
