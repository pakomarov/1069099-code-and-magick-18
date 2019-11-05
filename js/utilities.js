'use strict';


(function () {
  var KEYCODE_ESC = 27;
  var KEYCODE_ENTER = 13;


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

  var getShuffledArray = function (array) {
    var shuffledArray = array.slice();

    // Алгоритм: "The Durstenfeld Shuffle" (оптимизированная версия "Fisher–Yates shuffle")
    // Алгоритм работает с конца до начала для простоты расчёта индекса j. 0 < j < i если работать начиная с конца, или i < j < (array.length - 1) если работать с начала
    for (var temp, j, i = shuffledArray.length - 1; i > 0; i--) {
      j = getRandomNumberInRange(0, i);

      temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }

    return shuffledArray;
  };

  var getTrimmedArray = function (array, leftoverLength) {
    var randomlyTrimmedArray = array.slice();

    for (var i = 0; i < array.length - leftoverLength; i++) {
      randomlyTrimmedArray.pop();
    }

    return randomlyTrimmedArray;
  };

  var getShuffledSubsetOfArray = function (array, length) {
    var shuffledArray = getShuffledArray(array);
    var shuffledSubsetOfArray = getTrimmedArray(shuffledArray, length);
    return shuffledSubsetOfArray;
  };

  var renderNodes = function (targetNode, nodes) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < nodes.length; i++) {
      fragment.appendChild(nodes[i]);
    }

    targetNode.appendChild(fragment);
  };


  window.utilities = {
    getMaxArrayEntry: getMaxArrayEntry,
    getRandomArrayEntry: getRandomArrayEntry,
    getDifferentArrayEntry: getDifferentArrayEntry,
    getShuffledSubsetOfArray: getShuffledSubsetOfArray,
    renderNodes: renderNodes,
    KEYCODE_ESC: KEYCODE_ESC,
    KEYCODE_ENTER: KEYCODE_ENTER
  };
})();
