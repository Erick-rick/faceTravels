angular.module('mapApp').controller('dashboardController', function() {
	var self = this;
	self.buttom = {};

	if (!localStorage.getItem("usuarioLogin")) {
  		self.buttom.nome = 'login';
  		self.buttom.url = 'dashboard.login';
  		
    } else {
  		self.buttom.nome = 'logout';
  		self.buttom.url = 'dashboard.login';
    }

});