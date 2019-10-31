'use strict';

// Вдохновлено этим: https://stackoverflow.com/questions/13070054/convert-rgb-strings-to-hex-in-javascript

(function () {
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

  var convertRgbToHex = function (rgb) {
    var intColorValues = parseRgbToIntColorValues(rgb);
    var hexColorValues = intColorValues.map(convertIntColorValueToHex);
    var hex = getHexColorFromHexValues(hexColorValues);
    return hex;
  };


  window.hexRgbConverter = {
    convertRgbToHex: convertRgbToHex
  };
})();
