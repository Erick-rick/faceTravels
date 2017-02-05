angular.module("mapApp").controller("loginController", function($state, $rootScope){
	var self = this;
	var data = {
			url: 'img/admin.jpg'
		}
	var admin ={
		nome: 'admin',
		senha: 'admin',
		largePicture: {data} 

	}

	/**
	 * Mostra mensagem.
	 *
	 */
	var showMensagem= function(msg){
		self.mensagem = msg;
	};

	self.login = function(){
		if(self.nome == admin.nome){
			if(self.senha == admin.senha){
				$rootScope.usuario = admin;
				$state.go("dashboard.home", {mensagem: 'Olá Admin!' });   
			}
			else{
				showMensagem('Senha invalida');
			}
		}
	}

});