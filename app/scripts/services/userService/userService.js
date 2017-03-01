angular.module("mapApp").factory('userService', function(config, $http, $q) {

	var _getUsers = function(){
		return $http.get(config.baseUrl + 'lista_usuario.php');
	} 

    return {
    	getUsers: _getUsers
    }
});