angular.module('mapApp').controller('usersNewController', function(userService, $state) {
	var self = this;

	self.usuario = {};

	self.save = function(){
		userService.saveUser(self.usuario).then(function onSuccess(response) {
    		$state.go("dashboard.home", {mensagem: 'Olá '+ self.usuario.nome }); 
  		}, function onError(response) {
		   
  		});
	}

	self.remove = function(){
		
	}

});