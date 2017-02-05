angular.module("mapApp").controller("loginController", function($state, $rootScope, facebookService){
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
	 * Inicializa o login com facebook.
	 *
	 */
	facebookService.initialize(); 
	FB.Event.subscribe('auth.login', function(response){
		$state.go("dashboard.myProfile"); 
	});

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
		else{
			showMensagem('Usuario invalido');
		}
	}

});