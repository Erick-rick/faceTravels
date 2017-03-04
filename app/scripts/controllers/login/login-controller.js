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

    			var usuarioLogado = response.data[0];
    			usuarioLogado.largePicture = {data}; 
				//Armazena o usuario na sessao
				localStorage.setItem("usuarioLogado", usuarioLogado.nome);
				localStorage.setItem("usuarioId", usuarioLogado.id_usuario);
				localStorage.setItem("usuarioFoto", usuarioLogado.largePicture.data.url);

				$rootScope.usuario = usuarioLogado;

				$state.go("dashboard.home", {mensagem: 'Olá '+ response.data[0].nome });   
			} 
			else{
				showMensagem('Senha invalida');
			}

  		}, function onError(response) {
		   
  		});
	}

	self.logout = function(){
		$rootScope.usuario = null;
		localStorage.clear();
	}

});