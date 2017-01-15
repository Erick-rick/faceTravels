
angular.module('myApp', [])

.directive('myMap', function() {
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        var cidades = [];

        var myLatLng = {lat: -15.779, lng: -47.929};// Cidade de Brasilia
        
        // map configuracoes
        var mapOptions = {
            center: myLatLng,
            zoom: scope.zoom, // Zoom Definido Pelo usuario
            //mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        // inicializa o mapa
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // coloca um marcador
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // adiciona markers no array
            
            google.maps.event.addListener(marker, 'click', function () {
                // Fecha a janela se nao for undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // cria uma nova janela
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }
        
        // Inicializa o mapa
        initMap();
        
        setMarker(map, myLatLng, 'Brasilia', 'Centro do Brasil');
        setMarker(map, {lat:  -3.717, lng: -38.543}, 'Fortaleza', 'Cidade do Brasil');
        
        //Alteracao no Zoom da tela
        scope.$watch('zoom', function(value) {            
            map.setZoom(value)
        });

        //Alteracao na lista de cidades da tela
        scope.$watch('cidades', function(lista) {            
            cidades = lista;//map.setZoom(value)
        });
         
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        scope: {
            zoom: '=zoom',
            cidades: '=cidades'
        },
        link: link
    };
})
/*
.directive('searchMap', function() {
    var link = function(scope, element, attrs) {

        function initAutocomplete() {
            var searchBox = new google.maps.places.SearchBox(element[0]);

            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();

                //Adiciona os locais 
                scope.locais = places;

                if (places.length == 0) {
                  return;
                }
            });
        }
        
        initAutocomplete() ;
    };
    
    return {
        restrict: 'A',
        replace: true,
        link: link,
        scope: {
            locais: "=locais"
        }
    };
})*/

.directive('searchMap', function() {
    var link = function(scope, element, attrs) {

        function initAutocomplete() {
            var autocomplete = new google.maps.places.Autocomplete(element[0]);

            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            autocomplete.addListener('place_changed', function() {
                var place = autocomplete.getPlace();

                if (!place.geometry) {
                  console.log("Autocomplete's returned place contains no geometry");
                  return;
                }

                //Adiciona os locais 
                //console.log(element[0].value);
                scope.locais = place;

            });

            autocomplete.addListener('blur', function() { 
                console.log("lost"); 
            });
        }
        
        initAutocomplete() ;
    };
    
    return {
        restrict: 'A',
        replace: true,
        link: link,
        scope: {
            locais: "=locais"
        }
    };
});

