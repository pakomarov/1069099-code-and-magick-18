'use strict';


(function () {
  var similarWizardTemplateNode = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


  var createWizardNode = function (wizard) {
    var newWizardNode = similarWizardTemplateNode.cloneNode('true');

    newWizardNode.querySelector('.setup-similar-label').textContent = wizard.name;
    newWizardNode.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newWizardNode.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return newWizardNode;
  };


  window.wizard = {
    createWizardNode: createWizardNode
  };
})();
