angular.module('mapApp').controller('myProfileController', function(facebookService, $rootScope) {

	var self = this;
	self.usuario = {};
	self.isConected = false;
	self.listCallback = new Array();

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

	var getStatus = function(){
		self.isConected = facebookService.getStatus()
	}

	self.checkLoginState = function() {
      FB.getLoginStatus(function(response) {
        console.log(response);
      });
    }

  	self.listCallback.push(getUsuario);
  	self.listCallback.push(getStatus);
	facebookService.initialize(self.listCallback);

});