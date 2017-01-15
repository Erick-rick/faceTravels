angular.module('myApp').controller('mapaController', function() {
	var self = this;

	self.zoom = 4;

	self.addZoom = function() {
		if(self.zoom < 20){
			self.zoom = self.zoom + 1;
		}
	}

	self.subZoom = function() {
		if(self.zoom > 0){
			self.zoom = self.zoom - 1;
		}
	}

	self.listaCidades = [];

	var brasilia = {
		nome: 'Brasilia',
		coordenadas: {lat: -15.779, lng: -47.929}
	}

	var fortaleza = {
		nome: 'Fortaleza',
		coordenadas: {lat:  -3.717, lng: -38.543}
	}

	self.listaCidades.push(brasilia);
	self.listaCidades.push(fortaleza);

	self.addLugar = function(valor){
		
		var cidade = { nome: valor};

		self.listaCidades.push(cidade);
	}

});