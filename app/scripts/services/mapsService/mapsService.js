angular.module("mapApp").factory('mapsService', function($q, config) {
	var self = this;

    self.top5 = new Array();

    /***** top 5 cidades *****/

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

    self.top5.push(fortaleza);
    self.top5.push(rioDeJaneiro);
    self.top5.push(brasilia);
    self.top5.push(saoPaulo);
    self.top5.push(rioGrandeDoSul);

    // fim top 5 cidades

    /** 
    *   coloca um marcador
    **/
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
    var _initMap = function(element, mapOptions) {
    	var map;
        if (map === void 0) {
            map = new google.maps.Map(element, mapOptions);
        }
        return map;
    } 

    var _getTop5 =function(element, mapOptions) {
        return self.top5;
    }  

    return {
    	initMap: _initMap,
    	addMarker: _addMarker,
        getTop5: _getTop5
    }
});