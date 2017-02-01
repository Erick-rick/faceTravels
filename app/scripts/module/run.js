angular.module('mapApp').run(['$rootScope', '$window',
  function($rootScope, $window) {

  $rootScope.user = {};

   function statusChangeCallback(response) {
    if (response.status === 'connected') {
      getUser();
      console.log("connected in fb");

    } else if (response.status === 'not_authorized') {
      console.log("not_authorized in fb");

    } else {
      console.log("not logged in fb");
      
    }
  }

  $window.fbAsyncInit = function() {
    // Executed when the SDK is loaded

    FB.init({
      appId      : '1789567744640995',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });

    //sAuth.watchAuthenticationStatusChange();
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };


var getUser = function () {
  FB.api('/me', 
    {fields: "id,cover, age_range, locale, about,picture,context,email,first_name, name,"+
        "last_name,gender,link,location,timezone"},

    function(data) {
      $rootScope.user = data;
    });
}

}]);