angular.module('mapApp').controller('dashboardController', function($rootScope, $state) {
	var self = this;
	self.buttom = {};

  //Logout
  self.logout = function(){
    $rootScope.usuario = null;
    localStorage.clear();
    $state.go("dashboard.home", {mensagem: 'Até logo! '});
  }

/*
	if (!localStorage.getItem("usuarioLogin")) {
  		self.buttom.nome = 'login';
  		self.buttom.url = 'dashboard.login';
  		
    } else {
  		self.buttom.nome = 'logout';
  		//self.buttom.url = 'dashboard.login';
    }

    self.logout = function(){
      $rootScope.usuario = null;
      localStorage.clear();
    }*/

});