var myApp = angular.module('mapApp', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

         $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login/login.html'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'views/home/home.html',
                controller: 'homeController as hc'
            })

            .state('myProfile', {
                url: '/myProfile',
                templateUrl: 'views/user/myProfile.html',
            });

         $urlRouterProvider.otherwise('/home');
    }
]);