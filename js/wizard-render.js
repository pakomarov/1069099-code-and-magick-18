'use strict';


(function () {
  var similarWizardTemplateNode = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


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


  window.wizardRender = {
    createWizardNode: createWizardNode,
    createWizardNodes: createWizardNodes
  };
})();
