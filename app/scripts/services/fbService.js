angular.module("mapApp").factory('facebookService', function($q, config) {
	
	var self = this;
	self.observerCallbacks = new Array(); //Padrao Observe 
	self.isConected = false;

	/**
	* Inicializacao do Facebook 
	**/
	var initialize = function(){
		FB.init({
			appId      : config.facebookApiKey,
			cookie     : true,  // enable cookies to allow the server to access 
			                  // the session
			xfbml      : true,  // parse social plugins on this page
			version    : 'v2.8' // use graph api version 2.8
		});

		FB.getLoginStatus(function(response) {
			_notifyObservers();// Apos o carregamento
		});
	};

	var statusChangeCallback = function(response) {
		if (response.status === 'connected') {
			self.isConected = true;
		  console.log("connected in fb");

		} else if (response.status === 'not_authorized') {
		  console.log("not_authorized in fb");

		} else {
		  console.log("not logged in fb");
		  
		}
  	}

  	var _addObserver = function(callback){
	self.observerCallbacks.push(callback);
	}

	var _notifyObservers = function(){
		angular.forEach(self.observerCallbacks, function(callback, key) {
	  		callback();
	  		self.observerCallbacks.splice(key, 1); // Remove da lista
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

	//Teste para Verificar caso o usuario esteja logado
	_addObserver(function(){
		FB.getLoginStatus(function(response) {
	      statusChangeCallback(response);
	    });
	});
	initialize();


    return {
    	getUser: _getUser,
    	getMyLastName: _getMyLastName,
    	addObserver: _addObserver,
    	notifyObservers: _notifyObservers,
    	getUserPicture: _getUserPicture
    }
});