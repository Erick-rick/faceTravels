angular.module('mapApp').controller('usersNewController', function(userService) {
	var self = this;

	self.usuario = {};

	var usuario = { 	
        nome:"Raimundo",
        login:"Raimundo",
        senha:"Raimundo",
        //id_face: '128566010984055',
        sexo: 'masculino'
   }


	self.save = function(){
		userService.saveUser(usuario).then(function onSuccess(response) {
    		
  		}, function onError(response) {
		   
  		});
	}

	self.remove = function(){
		
	}

});