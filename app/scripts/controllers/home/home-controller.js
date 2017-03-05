angular.module('mapApp').controller('homeController', function(mapsService, $timeout, $stateParams) {

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
	self.mensagem = '';

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

	/**
	 * Mostra mensagem.
	 *
	 */
	var showMensagem= function(msg){
		self.mensagem = msg;
		 $timeout(function() {
        	self.mensagem = "";
    	}, 4000);
	};

	self.apagaMensagem= function(){
		self.mensagem = '';
	};

	if($stateParams.mensagem){
		showMensagem($stateParams.mensagem);
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


	/********* Comentarios ********/

	self.listaComentarios = [];
	var addComentarioPrinc = function (foto, nome, text, mapa){
		var data = {url: foto};
		self.listaComentarios.push({
	    	usuario: {nome: nome},
	    	largePicture: {data},
	    	texto: text,
	    	mapa: mapa
	    });
	}
	addComentarioPrinc('https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/16142748_128470974326892_6285161623078398292_n.jpg?oh=e165258dc173b9c02ba56f131b32457f&oe=592BCE77', 'Nonato', 'É claro que o acompanhamento das preferências de consumo assume importantes posições no estabelecimento do fluxo de informações.', 'img/mapas/saopaulo.png');
	addComentarioPrinc('https://www.w3schools.com/w3images/avatar2.png', 'Jerfesson', 'Gostaria de enfatizar que o acompanhamento das preferências de consumo acarreta um processo de reformulação e modernização das direções preferenciais no sentido do progresso.', 'img/mapas/beiramar.png');
	addComentarioPrinc('https://www.w3schools.com/w3images/avatar1.png', 'Iago De Lavor', 'O que temos que ter sempre em mente é que a valorização de fatores subjetivos promove a alavancagem dos procedimentos normalmente adotados.', 'img/mapas/cristo.png');


	initMap();
	iniciaMarkers();
});