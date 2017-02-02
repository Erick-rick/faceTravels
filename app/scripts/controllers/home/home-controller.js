angular.module('mapApp').controller('homeController', function(mapsService) {

	var self = this;

	self.map = {};
	self.zoom = 4;
	self.locais = new Array();
	self.enderecos = [];
	self.centro = {
		lat: -15.779, 
		lng: -47.929
	}

	var slideIndex = 0;

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

	var initMap = function() {
		var gmaps = document.getElementById('gmaps');
		var mapOptions = {
	        center: {lat: -15.779, lng: -47.929},
	        zoom: self.zoom, 
	        scrollwheel: false
	    };

		if(gmaps){
			self.map = mapsService.initMap(gmaps, mapOptions);
		}
	}

	var showSlides = function() {
	    var i;
	    var slides = document.getElementsByClassName("mySlides");
	    
	    if(slides.length > 0){
	    	for (i = 0; i < slides.length; i++) {
		       slides[i].style.display = "none";  
		    }

		    slideIndex++;
		    if (slideIndex> slides.length) {
		    	slideIndex = 1
		    } 

		    slides[slideIndex-1].style.display = "block"; 
		    setTimeout(showSlides, 2000);
	    }
	}

	initMap();
	showSlides();
});