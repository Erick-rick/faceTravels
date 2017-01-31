angular.module("mapApp")/*.factory("fbService", function ($http){

	function statusChangeCallback(response) {
	  if (response.status === 'connected') {
	    testAPI();

	  } else if (response.status === 'not_authorized') {
	    $('#status').html('Por favor faça login ');
	  } else {
	    $('#status').html('Por favor faça login ');
	  }
	}


	function checkLoginState() {
	  FB.getLoginStatus(function(response) {
	    statusChangeCallback(response);
	  });
	}

	function testAPI() {
  var user_id = 0;
  
  FB.api('/me', 
      {fields: "id,cover, age_range, locale, about,picture,context,email,first_name, name,"+
          "last_name,gender,link,location,timezone"},

      function(response) {
        user_id = response.id;
        
        });

	}

	return {
	      filterPlanoAnual: _filterPlanoAnual,
	    };


});*/

.factory('facebookService', function($q, $rootScope, $window) {
    return {
        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
});