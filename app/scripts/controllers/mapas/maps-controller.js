angular.module('mapApp').controller('myMapsController', function(mapsService, userService) {
	var self = this;

	var self = this;

	self.map = {};
	self.autocomplete = {};

	self.zoom = 4;
	self.place = {};
	self.enderecos = new Array();
	self.markers = new Array();
	self.centro = {
		lat: -15.779, 
		lng: -47.929
	}


	self.texto = 'Difícil encontrar alguém que não goste de viajar. Independente da modalidade – desde o que só viajam em alguns feriados por ano, até aqueles que adotaram o lifestyle de viajantes  – viajar é definitivamente algo que nos move e que desperta sentimentos únicos.';
    self.usuario = {
        nome: 'Nonato Dias'
    };

    self.usuarioLogado = userService.getStoredUser();
    if(!self.usuarioLogado.nome)
		self.usuarioLogado.nome = 'Desconhecido';
    
    self.showComentario = false;

    self.listaComentarios = [];
    var fotoJose = {url: 'https://www.w3schools.com/w3images/avatar3.png'};
    self.listaComentarios.push({
    	usuario: {
    		nome: 'Renan',
    		largePicture: {data: fotoJose}
    	},
    	texto: 'Porque sair é, muitas vezes, a melhor forma de nos encontrarmos – por mais irônico que possa parecer.'
    });

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

	var initAutoComplete = function() {
		var gplace = document.getElementById('gplace');
		if(gplace){
			self.autocomplete = mapsService.initAutocomplete(gplace);
		}
	}

	var addMarker = function(place){
		var markerOp = {
            position: place.location,
            map: self.map,
            content: place.comentario,
            title: place.nome,
            icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
        };
        self.enderecos.push(place);
        self.markers.push(mapsService.addMarker(self.map,markerOp));
	}

	var iniciaMarkers = function(){
		var listaPlaces = mapsService.getTop5();
        if(listaPlaces){
            angular.forEach(listaPlaces, function(place, key) {
                addMarker(place);
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

	self.addLugar = function(){
		self.place = mapsService.getPlaceAutoComplete();

		document.getElementById('id01').style.display ='none';// Fecha o modal
        
        if(self.place){
            var cidade = { 
                nome: self.place.formatted_address,
                location: self.place.geometry.location,
                comentario: self.comentario
            };
            self.comentario = '';
            addMarker(cidade);
        }

	}

	/********* Comentarios **********/

	self.addComentario = function(keyEvent){
		
		if (keyEvent.which === 13){
			self.listaComentarios.push({
		    	usuario: self.usuarioLogado,
		    	texto: self.cometario.texto
		    });
		}
	}

	//Fim Comentarios

	initMap();
	iniciaMarkers();
	initAutoComplete();
});