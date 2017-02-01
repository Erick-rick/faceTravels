angular.module('mapApp').controller('myProfileController', function(facebookService, $rootScope) {

	var self = this;

	self.getMyLastName = function() {
		self.usuario = $rootScope.user;
		console.log(self.usuario);

		// Teste
		document.getElementById('foto').innerHTML = "<img src='"+self.usuario.picture.data.url+"'>"
	}
});