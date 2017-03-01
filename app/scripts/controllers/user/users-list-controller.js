angular.module('mapApp').controller('usersListController', function(userService) {
	var self = this;
	self.lista = [];

	var getUsuarios = function(){
		userService.getUsers().then(function onSuccess(response) {
    		self.lista = response.data.usuarios;

  		}, function onError(response) {
		   
  		});
	}

	getUsuarios();

});