angular.module("mapApp").factory('userService', function(config, $http, $q) {

	var _storeUser = function(usuarioLogado){
		localStorage.setItem("usuarioNome", usuarioLogado.nome);
		localStorage.setItem("usuarioSexo", usuarioLogado.sexo);
		localStorage.setItem("usuarioLogin", usuarioLogado.login);
		localStorage.setItem("usuarioId", usuarioLogado.id_usuario);
		localStorage.setItem("usuarioRegra", usuarioLogado.regra);
		localStorage.setItem("usuarioFoto", usuarioLogado.largePicture.data.url);
	}

	var _getStoredUser = function(){
		var data= {};
		data.url = localStorage.getItem("usuarioFoto");
		return user = {
			nome: localStorage.getItem("usuarioNome"),
			sexo: localStorage.getItem("usuarioSexo"),
			login: localStorage.getItem("usuarioLogin"),
			id_usuario: localStorage.getItem("usuarioId"),
			largePicture: {data}
		}
	}

	var _getUsers = function(){
		return $http.get(config.baseUrl + 'lista_usuario.php');
	} 

	var _getUserFB = function(id_face){
		return $http.post(config.baseUrl + 'consultar_face.php', {id_face});
	} 

	var _saveUser = function(user){
		return $http.post(config.baseUrl + 'inserir_usuario.php', user);
	} 

	var _deleteUser = function(id_usuario){
		return $http.post(config.baseUrl + 'excluir_usuario.php', {id_usuario});
	} 

	var _changeRoleUser = function(id_usuario){
		return $http.post(config.baseUrl + 'tornar_adm.php', {id_usuario});
	} 


	var _authenticate = function(login){
		/*return $http.post(config.baseUrl + 'autenticar_usuario.php', 
			'login='+login.login+'&senha='+login.senha,
			 {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});*/
		return $http.post(config.baseUrl + 'autenticar_usuario.php', login);
	} 

    return {
    	getUsers: _getUsers,
    	getStoredUser: _getStoredUser,
    	saveUser: _saveUser,
    	changeRoleUser: _changeRoleUser,
    	deleteUser: _deleteUser,
    	authenticate: _authenticate,
    	storeUser: _storeUser,
    	getUserFB: _getUserFB
    }
});