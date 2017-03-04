angular.module('mapApp').run(['$rootScope', '$window',
  function($rootScope, $window) {

  	if (localStorage.getItem("usuarioId")) {
  		var data = {};
  		data.url = localStorage.getItem("usuarioFoto");

        $rootScope.usuario = {
        	nome: localStorage.getItem("usuarioLogado"),
        	id_usuario: localStorage.getItem("usuarioId"),
        	largePicture: {data}
        } 
    }
}]);