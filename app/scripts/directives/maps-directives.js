/*
angular.module('mapApp')

//Directiva para inicializar o mapa
.directive('myMap', function(mapsService) {

    var link = function(scope, element, attrs) {
        var map;
        var markers = [];
        var enderecos = [];

        var myLatLng = {lat: -15.779, lng: -47.929};// Cidade de Brasilia
        
        // map configuracoes
        var mapOptions = {
            center: myLatLng,
            zoom: scope.zoom, // Zoom Definido Pelo usuario
            //mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        function initMap() {
            map = mapsService.initMap(element[0], mapOptions);
        }

        function add(){
            if(scope.enderecos){
                angular.forEach(scope.enderecos, function(cidade, key) {
                    //setMarker(map, cidade.location, cidade.nome, cidade.comentario);
                    var markerOp = {
                        position: cidade.location,
                        map: map,
                        content: cidade.comentario,
                        title: cidade.nome,
                        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
                    };
                    markers.push(mapsService.addMarker(map,markerOp));

                });
            }
        }        
        
        //Alteracao no Zoom da tela
        scope.$watch('zoom', function(value) {            
            map.setZoom(value);
        }, true);


        //Alteracao no Centro da tela
        scope.$watch('centro', function(value) {            
            map.setCenter(value);
        }, true);


        scope.$watch('enderecos', function(value) { 
            add();
        }, true);

        // Inicializa o mapa
        initMap();
        
        add();

         
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        scope: {
            zoom: '=zoom',
            enderecos: '=enderecos',
            centro: '=centro'
        },
        link: link
    };
})

//Directive para pesquisar enderecos
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
                scope.locais = place;
                scope.$apply();

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

*/