angular.module('mapApp').controller('myMapsController', function(mapsService) {
	var self = this;

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