
angular.module('myApp', [])

.directive('myMap', function() {
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];

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
        
        //Alteracao no Zoom da tela
        scope.$watch('zoom', function(value) {            
            map.setZoom(value)
        });
         
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        scope: {
            zoom: '=zoom',
        },
        link: link
    };
});

