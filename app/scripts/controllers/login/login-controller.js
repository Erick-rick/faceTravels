angular.module("mapApp").controller("loginController", function($state, $rootScope, facebookService, userService){
	var self = this;

	self.isConected = false;
	self.listCallback = new Array();

	/**
	 * Inicializa o login com facebook.
	 *
	 */
	facebookService.initialize(); 

	var getUsuarioFB = function(){
		var usuarioLogado;
		facebookService.getUser().then(function(data){
			if(data){
				usuarioLogado = {
					nome: data.name,
					login: data.email,
					sexo: data.gender
				};

				facebookService.getUserPicture(data.id).then(function(picture){
					if(picture){
						usuarioLogado.largePicture = picture;

						//Armazena o usuario na sessao
						userService.storeUser(usuarioLogado);
						$rootScope.usuario = usuarioLogado;

						$state.go("dashboard.home", {mensagem: 'Olá '+ usuarioLogado.nome });  
					}
				});
			}
		});
	}

	FB.Event.subscribe('auth.login', function(response){
		getUsuarioFB();
		
	});

	/**
	 * Mostra mensagem.
	 *
	 */
	var showMensagem= function(msg){
		self.mensagem = msg;
	};


	/**
	 * Inicializa o login pelo Facetravels.
	 *
	 */
	self.login = function(){

		userService.authenticate(self.user).then(function onSuccess(response) {
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
	}

	self.logout = function(){
		$rootScope.usuario = null;
		localStorage.clear();
	}

});