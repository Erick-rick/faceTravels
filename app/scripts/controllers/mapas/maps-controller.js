angular.module('mapApp').controller('myMapsController', function(mapsService) {
	var self = this;

	self.map = {};

	self.enderecos = new Array();
	self.markers = new Array();

	var fortaleza = {
		nome: 'Av Beira mar, Fortaleza - CE, Brasil',
		location: {lat:  -3.7253, lng: -38.4912},
		comentario: 'Melhor cidade'
	}

	self.enderecos.push(fortaleza);

	var initMap = function() {
		var gmaps = document.getElementById('gmaps');
		var mapOptions = {
	        center: {lat: -15.779, lng: -47.929},
	        zoom: 4, 
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

	initMap();
	iniciaMarkers();
});