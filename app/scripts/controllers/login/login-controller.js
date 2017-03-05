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
		facebookService.getUserID().then(function(data){
			if(data){
				userService.getUserFB(data.id).then(function onSuccess(response) {
					if(response.data){
						facebookService.getUserPicture(data.id).then(function(picture){
							usuarioLogado = response.data[0];

							if(picture){
								usuarioLogado.largePicture = picture;  
							}
							//Armazena o usuario na sessao
							userService.storeUser(usuarioLogado);
							$rootScope.usuario = usuarioLogado;

							$state.go("dashboard.home", {mensagem: 'Olá '+ usuarioLogado.nome });
						});

					}else{
						facebookService.getUserBasic().then(function(obj){
							usuarioLogado = {
								nome: obj.name,
								login: 'user'+obj.id,
								sexo: obj.gender,
								senha: '123456',
								id_face: obj.id
							};
							
							userService.saveUser(usuarioLogado).then(function onSuccess(response) {
								console.log('Salvo com sucesso');

								facebookService.getUserPicture(obj.id).then(function(picture){
									if(picture){
										usuarioLogado.largePicture = picture;  
									}

									//Armazena o usuario na sessao
									userService.storeUser(usuarioLogado);
									$rootScope.usuario = usuarioLogado;

									$state.go("dashboard.home", {mensagem: 'Olá '+ usuarioLogado.nome });
								});
					  		}, function onError(response) {
							   console.log('Erro ao salvar');
					  		});
						});
						
					}	
					}, function onError(response) {
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

	//Logout
	$rootScope.logout = function(){
		$rootScope.usuario = null;
		localStorage.clear();
		//$state.go("dashboard.home", {mensagem: 'Até logo! '});
	}

});