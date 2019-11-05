'use strict';


(function () {
  var URL_LOAD_WIZARDS = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE_CHARACTER = 'https://js.dump.academy/code-and-magick';
  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';


  var load = function (onLoad, onError) {
    window.network.request(URL_LOAD_WIZARDS, METHOD_GET, onLoad, onError);
  };

  var save = function (onLoad, onError, data) {
    window.network.request(URL_SAVE_CHARACTER, METHOD_POST, onLoad, onError, data);
  };


  window.backend = {
    load: load,
    save: save
  };
})();
