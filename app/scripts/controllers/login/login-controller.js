angular.module("mapApp").controller("loginController", function($state, $rootScope, facebookService, userService){
	var self = this;
	var data = {
			url: 'img/userMain.png'
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

		userService.authenticate(self.user).then(function onSuccess(response) {
    		if(response.data != "Errou!" && response.data != "Incompleto"){
				$rootScope.usuario = response.data[0];
				$rootScope.usuario.largePicture = {data}; 
				$state.go("dashboard.home", {mensagem: 'Olá '+ response.data[0].nome });   
			} 
			else{
				showMensagem('Senha invalida');
			}

  		}, function onError(response) {
		   
  		});
	}

});