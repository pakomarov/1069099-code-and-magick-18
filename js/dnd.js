'use strict';


(function () {
  var setupNode = document.querySelector('.setup');
  var uploadNode = setupNode.querySelector('.upload');


  var uploadNodeMouseDownHandler = function (evt) {
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;


    var documentMouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupNode.style.top = (setupNode.offsetTop - shift.y) + 'px';
      setupNode.style.left = (setupNode.offsetLeft - shift.x) + 'px';
    };

    var documentMouseUpHandler = function (upEvt) {
      var uploadNodeClickHandler = function (clickEvt) {
        clickEvt.preventDefault();
        uploadNode.removeEventListener('click', uploadNodeClickHandler);
      };

      upEvt.preventDefault();

      document.removeEventListener('mousemove', documentMouseMoveHandler);
      document.removeEventListener('mouseup', documentMouseUpHandler);

      if (dragged) {
        uploadNode.addEventListener('click', uploadNodeClickHandler);
      }
    };


    evt.preventDefault();
    document.addEventListener('mousemove', documentMouseMoveHandler);
    document.addEventListener('mouseup', documentMouseUpHandler);
  };


  uploadNode.addEventListener('mousedown', uploadNodeMouseDownHandler);
})();
