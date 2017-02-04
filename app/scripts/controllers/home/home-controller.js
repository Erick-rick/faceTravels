angular.module('mapApp').controller('homeController', function(mapsService) {

	var self = this;

	self.map = {};
	self.zoom = 4;
	self.locais = new Array();
	self.enderecos = new Array();
	self.markers = new Array();
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
		nome: 'Av Beira mar, Fortaleza - CE, Brasil',
		location: {lat:  -3.7253, lng: -38.4912},
		comentario: 'Melhor cidade'
	}

	var saoPaulo = {
		nome: 'São Paulo, SP, Brasil',
		location: {lat:  -23.550, lng: -46.633},
		comentario: 'Muito Grande'
	}

	var rioDeJaneiro = {
		nome: 'Santa Teresa, Rio de Janeiro - RJ, Brasil',
		location: {lat:  -22.9517417, lng: -43.21088050000003},
		comentario: 'Cristo Redentor'
	}

	var rioGrandeDoSul = {
		nome: 'Chui - Cristal, Porto Alegre - RS, Brasil',
		location: {lat:  -30.082321, lng: -51.242774999999995},
		comentario: 'Chui'
	}

	self.enderecos.push(fortaleza);
	self.enderecos.push(rioDeJaneiro);
	self.enderecos.push(brasilia);
	self.enderecos.push(saoPaulo);
	self.enderecos.push(rioGrandeDoSul);

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

	showSlides();

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

	var iniciaMarkers = function(){
        if(self.enderecos){
            angular.forEach(self.enderecos, function(cidade, key) {
                //setMarker(map, cidade.location, cidade.nome, cidade.comentario);
                var markerOp = {
                    position: cidade.location,
                    map: self.map,
                    content: cidade.comentario,
                    title: cidade.nome,
                    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
                };
                self.markers.push(mapsService.addMarker(self.map,markerOp));
            });
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
		self.map.setCenter(self.centro);
		self.map.setZoom(15);	
	}

	initMap();
	iniciaMarkers();
});