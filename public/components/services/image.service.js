(function(){
  angular
  .module('myApp')
  .service('ImageService', ImageService);

  function ImageService($http){
    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/wisterya/image/upload',
      data:{
        upload_preset: 'cenfoexam',
        tags:'Any',
        context:'photo=test'
      }
    };

    var public_api = {
      getConfiguration:_getConfiguration
    }
    return public_api;

    function _getConfiguration(){
      return cloudObj;
    }
  }
})();
