angular.module('mapApp').controller('myProfileController', function(facebookService, $rootScope) {

	var self = this;
	self.usuario = {};

	var getUsuario = function(){
		facebookService.getUser().then(function(data){
			if(data){
				self.usuario = data;

				facebookService.getUserPicture(data.id).then(function(picture){
					if(picture){
						self.usuario.largePicture = picture;
						$rootScope.usuario = self.usuario;
					}
				});
			}
		});
		
	}

	facebookService.addObserver(getUsuario);
	facebookService.notifyObservers();
});