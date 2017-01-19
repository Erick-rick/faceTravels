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
		location: {lat: -15.779, lng: -47.929},
		comentario: 'Prefiro Fortaleza'
	}

	var fortaleza = {
		nome: 'Fortaleza - CE, Brasil',
		location: {lat:  -3.717, lng: -38.543},
		comentario: 'Melhor cidade'
	}

	var saoPaulo = {
		nome: 'São Paulo, SP, Brasil',
		location: {lat:  -23.550, lng: -46.633},
		comentario: 'Muito Grande'
	}

	self.enderecos.push(brasilia);
	self.enderecos.push(fortaleza);
	self.enderecos.push(saoPaulo);

	self.addLugar = function(){

		document.getElementById('id01').style.display ='none';// Fecha o modal
		
		if(self.locais){
			var cidade = { 
				nome: self.locais.formatted_address,
				location: self.locais.geometry.location,
				comentario: self.comentario
			};
			self.locais = undefined;
			self.comentario = '';
			self.enderecos.push(cidade);
		}
		
	}

});