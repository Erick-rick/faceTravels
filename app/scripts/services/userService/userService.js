angular.module("mapApp").factory('userService', function(config, $http, $q) {

	var _getUsers = function(){
		return $http.get(config.baseUrl + 'lista_usuario.php');
	} 

	var _saveUser = function(user){
		return $http.post(config.baseUrl + 'inserir_usuario.php', user);
	} 

	var _authenticate = function(login){
		/*return $http.post(config.baseUrl + 'autenticar_usuario.php', 
			'login='+login.login+'&senha='+login.senha,
			 {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});*/
		return $http.post(config.baseUrl + 'autenticar_usuario.php', login);
	} 

    return {
    	getUsers: _getUsers,
    	saveUser: _saveUser,
    	authenticate: _authenticate
    }
});