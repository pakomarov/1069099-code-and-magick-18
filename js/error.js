'use strict';

// Решение плохое, но переделывать времени нет.
// poncik-87 20 hours ago  Collaborator
// не то, чтобы я прошу переделать, но просто отмечу, что т.к. это динамическое окно, которое весьма вероятно к появлению, то в целях производительности прятать окно было бы лучше стилями css, чем выдиранием из dom
// https://github.com/htmlacademy-javascript/1069099-code-and-magick-18/pull/6

(function () {
  var WARNING_STYLES = 'position: absolute; z-index: 100; left: 0; right: 0; margin: 0 auto; font-size: 20px; text-align: left; background-color: red;';
  var WARNING_TEXT_INTRO = 'ОШИБКА: ';


  var showWarning = function (errorMessage) {
    var warningNode = document.createElement('div');
    warningNode.style = WARNING_STYLES;
    warningNode.textContent = WARNING_TEXT_INTRO + errorMessage;

    var warningNodeClickHandler = function () {
      warningNode.removeEventListener('click', warningNodeClickHandler);
      warningNode.remove();
    };

    warningNode.addEventListener('click', warningNodeClickHandler);

    document.body.insertAdjacentElement('afterbegin', warningNode);
  };


  window.error = {
    showWarning: showWarning
  };
})();
