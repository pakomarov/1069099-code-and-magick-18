'use strict';


(function () {
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;
  var DEFAULT_DEBOUNCE_INTERVAL = 1000; // ms


  var getMaxArrayEntry = function (array) {
    var maxEntry = array[0];

    for (var i = 1; i < array.length; i++) {
      if (array[i] > maxEntry) {
        maxEntry = array[i];
      }
    }

    return maxEntry;
  };

  var getRandomNumberInRange = function (min, max) {
    // Добавление единицы необходимо, чтобы включить максимальное значение. Math.random() считает от 0 включительно до 1, не включая единицу
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomArrayEntry = function (array) {
    var randomArrayIndex = getRandomNumberInRange(0, (array.length - 1));
    return array[randomArrayIndex];
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

  var debounce = function (cb, interval) {
    interval = interval || DEFAULT_DEBOUNCE_INTERVAL;

    var lastTimeout = null;

    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, interval);
    };
  };


  window.utilities = {
    getMaxArrayEntry: getMaxArrayEntry,
    getRandomArrayEntry: getRandomArrayEntry,
    getDifferentArrayEntry: getDifferentArrayEntry,
    renderNodes: renderNodes,
    KEYCODE_ESC: KEYCODE_ESC,
    KEYCODE_ENTER: KEYCODE_ENTER,
    debounce: debounce
  };
})();
