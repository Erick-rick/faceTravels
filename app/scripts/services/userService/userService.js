angular.module("mapApp").factory('userService', function(config, $http, $q) {

	var _getUsers = function(){
		return $http.get(config.baseUrl + 'lista_usuario.php');
	} 

	var _saveUser = function(user){
		return $http.post(config.baseUrl + 'inserir_usuario.php', user);
	} 

    return {
    	getUsers: _getUsers,
    	saveUser: _saveUser
    }
});