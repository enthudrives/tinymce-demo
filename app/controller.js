/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService'];


  function MainController($scope, LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;


    self.tinymceOptions = {
      onChange: function(e) {
        console.log('triggered..');
      },
      inline: false,
      plugins : 'advlist autolink autosave pagebreak anchor link image lists charmap print preview fullscreen',
      skin: 'lightgray',
      theme : 'modern',
      toolbar: 'fontselect',
      font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n'
    };


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();
