angular.module('mapApp').run(['$rootScope', '$window',
  function($rootScope, $window) {

  $rootScope.user = {};

   function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      console.log("connected in fb");
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      console.log("not_authorized in fb");
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
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

  (function(d){
    // load the Facebook javascript SDK

    var js,
    id = 'facebook-jssdk',
    ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
      return;
    }

    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);

  }(document));

}]);