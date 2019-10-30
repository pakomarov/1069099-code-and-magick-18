'use strict';


(function () {
  var getRandomArrayEntry = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var renderNodes = function (targetNode, nodes) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < nodes.length; i++) {
      fragment.appendChild(nodes[i]);
    }

    targetNode.appendChild(fragment);
  };


  window.utilities = {
    getRandomArrayEntry: getRandomArrayEntry,
    renderNodes: renderNodes
  };
})();
