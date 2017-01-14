
angular.module('myApp', []).controller('mapaController', function() {
	var self = this;

	self.anoFiltro = 2017;
	
	function initMap() {
		var myLatLng = {lat: -15.779, lng: -47.929};

	    var map = new google.maps.Map(document.getElementById('map'), {
		    center: myLatLng,
		    zoom: 4
	    });

	    var marker = new google.maps.Marker({
		    position: myLatLng,
		    map: map,
		    title: 'Brasilia'
		  });

	}

});