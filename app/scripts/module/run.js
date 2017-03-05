angular.module('mapApp').run(['$rootScope', '$window',
  function($rootScope, $window) {

  	if (localStorage.getItem("usuarioLogin")) {
  		var data = {};
  		data.url = localStorage.getItem("usuarioFoto");

        $rootScope.usuario = {
        	nome: localStorage.getItem("usuarioNome"),
          login: localStorage.getItem("usuarioLogin"),
          sexo: localStorage.getItem("usuarioSexo"),
        	id_usuario: localStorage.getItem("usuarioId"),
        	largePicture: {data}
        } 
    }

    //Logout
  $rootScope.logout = function(){
    $rootScope.usuario = null;
    localStorage.clear();
  }
  
}]);