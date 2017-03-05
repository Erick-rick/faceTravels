angular.module('mapApp').controller('usersListController', function(userService, $timeout) {
	var self = this;
	self.lista = [];
	self.mensagem = '';

	/**
	 * Mostra mensagem.
	 *
	 */
	var showMensagem= function(msg){
		self.mensagem = msg;
		 $timeout(function() {
        	self.mensagem = "";
    	}, 4000);
	};

	self.apagaMensagem= function(){
		self.mensagem = '';
	};

	var getUsuarios = function(){
		userService.getUsers().then(function onSuccess(response) {
    		self.lista = response.data.usuarios;

  		}, function onError(response) {
		   
  		});
	}

	self.openModalRemover = function(usuario){
		 document.getElementById('id01').style.display='block';
		self.userToChange  = usuario;
	}

	self.openModalPermissao = function(usuario){
		 document.getElementById('id02').style.display='block';
		self.userToChange  = usuario;
	}

	self.removeUsuario = function(){
		userService.deleteUser(self.userToChange.id_usuario).then(function onSuccess(response) {

    		userService.getUsers().then(function onSuccess(response) {
    			self.lista = response.data.usuarios;
    			document.getElementById('id01').style.display='none';
    			showMensagem('Removido com Sucesso');

	  		}, function onError(response) {
			   
	  		});
  		}, function onError(response) {
		   
  		});
	}

	self.tornarAdmin = function(){
		userService.changeRoleUser(self.userToChange.id_usuario).then(function onSuccess(response) {

    		userService.getUsers().then(function onSuccess(response) {
    			self.lista = response.data.usuarios;
    			document.getElementById('id02').style.display='none';
    			showMensagem('Modificado com Sucesso');

	  		}, function onError(response) {
			   
	  		});
  		}, function onError(response) {
		   
  		});
	}

	getUsuarios();

});