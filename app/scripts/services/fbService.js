angular.module("mapApp").factory('facebookService', function($q, $rootScope) {
    
	var _getMyLastName = function() {
        var deferred = $q.defer();
        FB.api('/me', { fields: 'last_name' }, 
        	function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
        	}
        );
        return deferred.promise;
    };

    var _getMyPicture = function() {
    	var deferred = $q.defer();

    	/*if($rootScope.user){
    		deferred.reject('Error occured');
    		return deferred.promise
    	}

    	FB.api(
          "/"+$rootScope.user.user_id+"/picture?type=large",
          function (response) {
            	if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            }          
        );
        console.log(deferred.promise);*/
        return deferred.promise;
   	};

    return {
    	getMyLastName: _getMyLastName,
    	getMyPicture: _getMyPicture
    }
});