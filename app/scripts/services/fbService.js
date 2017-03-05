angular.module("mapApp").factory('facebookService', function($q, config) {
	
	var self = this; 
	self.isConected = false;

	/**
	* Inicializacao do Facebook 
	**/
	var _initialize = function(listCallback){
		if(!self.isConected){
			FB.init({
				appId      : config.facebookApiKey,
				cookie     : true,  // enable cookies to allow the server to accessthe session
				xfbml      : true,  // parse social plugins on this page
				version    : 'v2.8' // use graph api version 2.8
			});
		}

		FB.getLoginStatus(function(response) {
		    statusChangeCallback(response, listCallback);
		});
	};

	var statusChangeCallback = function(response, listCallback) {
		if (response.status === 'connected') {
			self.isConected = true;
		  	console.log("connected in fb");
		  	_notifyObservers(listCallback);// Apos o carregamento

		} else if (response.status === 'not_authorized') {
		  console.log("not_authorized in fb");

		} else {
		  console.log("not logged in fb");
		  
		}
  	}

	var _notifyObservers = function(listCallback){
		angular.forEach(listCallback, function(callback, key) {
	  		callback();
	  		//self.observerCallbacks.splice(key, 1); // Remove da lista
		});
	}; 
	
	var _getUser = function () {
		var deferred = $q.defer();
        FB.api('/me', {fields: "id,cover, age_range, locale, about,picture,context,email,first_name, name,"+
			    	"last_name,gender,link,location,timezone"},
            function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            }
        );
        return deferred.promise;
	} 

    var _getUserBasic = function () {
        var deferred = $q.defer();
        FB.api('/me', {fields: "id,email,name,gender"},
            function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            }
        );
        return deferred.promise;
    } 

    var _getUserID = function () {
        var deferred = $q.defer();
        FB.api('/me', {fields: "id"},
            function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            }
        );
        return deferred.promise;
    } 

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

    var _getUserPicture = function(user_id) {
        var deferred = $q.defer();

     	FB.api("/"+user_id+"/picture?type=large",
        	function (response) {
            	if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            }          
		);
    	return deferred.promise;
    };

    var _getStatus = function(){
    	return self.isConected;
    }

    return {
    	getUser: _getUser,
        getUserID: _getUserID,
        getUserBasic: _getUserBasic,
    	getMyLastName: _getMyLastName,
    	notifyObservers: _notifyObservers,
    	getUserPicture: _getUserPicture,
    	initialize: _initialize,
    	getStatus: _getStatus
    }
});