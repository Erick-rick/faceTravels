angular.module('mapApp').controller('myProfileController', function(facebookService, $rootScope) {

	var self = this;
	self.usuario = {};

	var getUsuario = function(){
		facebookService.getUser().then(function(data){
			if(data){
				self.usuario = data;
			}
			console.log("entrou aquiS");
			console.log(data);
		});
		
	}

	facebookService.addObserver(getUsuario);
	facebookService.notifyObservers();

	/*self.getMyLastName = function() {
		self.usuario = $rootScope.user;
		console.log(self.usuario);

		// Teste
		document.getElementById('foto').innerHTML = "<img src='"+self.usuario.picture.data.url+"'>"
	}*/
});