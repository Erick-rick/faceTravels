angular.module('myApp').controller('mapaController', function() {
	var self = this;

	self.locais = undefined;
	self.enderecos = [];
	self.centro = {
		lat: -15.779, 
		lng: -47.929
	}

	self.zoom = 4;

	self.disable = function(){
		if(self.locais)
			return false;
		return true;
	}

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

	self.centralizar = function(key){
		if(self.enderecos[key]){
			self.centro = self.enderecos[key].location;
		}
		else{
			self.centro = {
				lat: -15.779, 
				lng: -47.929
			}
		}
		
	}

	var brasilia = {
		nome: 'Brasilia - CE, Brasil',
		location: {lat: -15.779, lng: -47.929}
	}

	var fortaleza = {
		nome: 'Fortaleza - CE, Brasil',
		location: {lat:  -3.717, lng: -38.543}
	}

	self.enderecos.push(brasilia);
	self.enderecos.push(fortaleza);

	self.addLugar = function(){
		
		if(self.locais){
			var cidade = { 
				nome: self.locais.formatted_address,
				location: self.locais.geometry.location
			};
			self.locais = undefined;
			self.enderecos.push(cidade);
		}
		
	}

});