'use strict';


(function () {
  var RENDERING_COUNT = 4;
  var ERROR_MESSAGE = 'К сожалению, у нас возникли неполадки. Попробуйте повторить запрос позднее.';


  var similarListNode = document.querySelector('.setup-similar-list');
  var setupSimilarNode = document.querySelector('.setup-similar');


  var renderSimilarWizards = function (wizards) {
    var chosenWizards = window.utilities.getShuffledSubsetOfArray(wizards, RENDERING_COUNT);
    var wizardNodes = chosenWizards.map(window.wizard.createWizardNode);
    window.utilities.renderNodes(similarListNode, wizardNodes);
    setupSimilarNode.classList.remove('hidden');
  };


  var onLoad = function (response) {
    if (response === null || !Array.isArray(response)) {
      window.error.showWarning(ERROR_MESSAGE);
      return;
    }

    renderSimilarWizards(response);
  };

  var onError = function (error) {
    window.error.showWarning(error);
  };


  var setup = function () {
    window.backend.load(onLoad, onError);
  };


  window.similarWizards = {
    setup: setup
  };
})();
