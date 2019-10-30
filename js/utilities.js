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

  var parseRgbToIntColorValues = function (rgb) {
    var parsedStringColorValues = rgb.split('(')[1].split(')')[0].split(',');
    var intColorValues = parsedStringColorValues.map(function (string) {
      return parseInt(string, 10);
    });
    return intColorValues;
  };

  var convertIntColorValueToHex = function (intColorValue) {
    var hexColorValue = intColorValue.toString(16);
    var hexColorValueWithTwoDigits = hexColorValue.length === 1 ? '0' + hexColorValue : hexColorValue;
    return hexColorValueWithTwoDigits;
  };

  var getHexColorFromHexValues = function (hexValues) {
    return '#' + hexValues.join('');
  };

  // Вдохновлено этим: https://stackoverflow.com/questions/13070054/convert-rgb-strings-to-hex-in-javascript
  var convertRgbToHex = function (rgb) {
    var intColorValues = parseRgbToIntColorValues(rgb);
    var hexColorValues = intColorValues.map(convertIntColorValueToHex);
    var hex = getHexColorFromHexValues(hexColorValues);
    return hex;
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
    convertRgbToHex: convertRgbToHex,
    renderNodes: renderNodes,
    KEYCODE_ESC: KEYCODE_ESC,
    KEYCODE_ENTER: KEYCODE_ENTER
  };
})();
