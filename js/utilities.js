'use strict';


(function () {
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;


  var getRandomArrayEntry = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getDifferentArrayEntry = function (array, value) {
    var arrayOfDifferentEntries = array.slice();

    for (var i = arrayOfDifferentEntries.length - 1; i >= 0; i--) {
      if (arrayOfDifferentEntries[i] === value) {
        arrayOfDifferentEntries.splice(i, 1);
      }
    }

    // Возвращает старое значение, если не нашлось отличного
    if (arrayOfDifferentEntries.length === 0) {
      return value;
    }

    return getRandomArrayEntry(arrayOfDifferentEntries);
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
    getDifferentArrayEntry: getDifferentArrayEntry,
    renderNodes: renderNodes,
    KEYCODE_ESC: KEYCODE_ESC,
    KEYCODE_ENTER: KEYCODE_ENTER
  };
})();
