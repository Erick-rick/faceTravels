angular.module("mapApp").factory('mapsService', function($q, config) {
	var self = this;

    // coloca um marcador
    var _addMarker = function (map, markerOptions) {
        var marker = new google.maps.Marker(markerOptions);
        var infoWindow;
        google.maps.event.addListener(marker, 'click', function () {
            // Fecha a janela se nao for undefined
            if (infoWindow !== void 0) {
                infoWindow.close();
            }
            // cria uma nova janela
            var infoWindowOptions = {
                content: markerOptions.content
            };
            infoWindow = new google.maps.InfoWindow(infoWindowOptions);
            infoWindow.open(map, marker);
        });
        return marker;
    }

    // inicializa o mapa
    var _initMap =function(element, mapOptions) {
    	var map;
        if (map === void 0) {
            map = new google.maps.Map(element, mapOptions);
        }
        return map;
    }   

    return {
    	initMap: _initMap,
    	addMarker: _addMarker
    }
});