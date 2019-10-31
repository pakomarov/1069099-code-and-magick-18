'use strict';


(function () {
  var similarListNode = document.querySelector('.setup-similar-list');
  var setupSimilarNode = document.querySelector('.setup-similar');


  var mockupWizards = window.mockup.createMockupWizards();
  var wizardNodes = mockupWizards.map(window.wizard.createWizardNode);
  window.utilities.renderNodes(similarListNode, wizardNodes);
  setupSimilarNode.classList.remove('hidden');
})();
