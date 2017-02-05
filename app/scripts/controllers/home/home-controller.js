angular.module('mapApp').controller('homeController', function(mapsService) {

	var self = this;

	self.map = {};
	self.zoom = 4;
	self.locais = new Array();
	self.enderecos = mapsService.getTop5();
	self.markers = new Array();
	self.centro = {
		lat: -15.779, 
		lng: -47.929
	}

	var slideIndex = 0;

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