angular.module('mapApp').controller('usersNewController', function(userService, $rootScope, $state) {
	var self = this;

	self.usuario = {};

	self.save = function(){
		userService.saveUser(self.usuario).then(function onSuccess(response) {
			var login = {
				login: self.usuario.login,
				senha: self.usuario.senha
			}

			userService.authenticate(login).then(function onSuccess(response) {
				var data = {
					url: 'img/userMain.png'
				}
	    		if(response.data != "Errou!" && response.data != "Incompleto"){

	    			var usuarioLogado = response.data[0];
	    			usuarioLogado.largePicture = {data}; 

					//Armazena o usuario na sessao
					userService.storeUser(usuarioLogado);

					$rootScope.usuario = usuarioLogado;

					$state.go("dashboard.home", {mensagem: 'Olá '+ response.data[0].nome });   
				} 
				else{
					showMensagem('Senha invalida');
				}

	  		}, function onError(response) {
			   
	  		});
  		}, function onError(response) {
		   
  		});
	}

	self.remove = function(){
		
	}

});