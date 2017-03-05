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

	self.openModal = function(usuario){
		 document.getElementById('id01').style.display='block';
		self.userToRemove  = usuario;
	}

	self.removeUsuario = function(){
		userService.deleteUser(self.userToRemove.id_usuario).then(function onSuccess(response) {

    		userService.getUsers().then(function onSuccess(response) {
    			self.lista = response.data.usuarios;
    			document.getElementById('id01').style.display='none';
    			showMensagem('Removido com Sucesso');

	  		}, function onError(response) {
			   
	  		});
  		}, function onError(response) {
		   
  		});
	}

	getUsuarios();

});