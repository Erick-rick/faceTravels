angular.module('myApp').controller('mapaController', function() {
	var self = this;

	self.zoom = 8;

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
		nome: 'Brasilia'
	}

	self.listaCidades.push(brasilia);

	self.addLugar = function(valor){
		
		var cidade = { nome: valor};

		self.listaCidades.push(cidade);
	}

});