var myApp = angular.module('mapApp', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

         $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html'
            })

            .state('dashboard.home', {
                url: '/home',
                templateUrl: 'views/home/home.html',
                controller: 'homeController as hc'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'views/login/login.html'
            })

            .state('dashboard.myProfile', {
                url: '/myProfile',
                templateUrl: 'views/user/myProfile.html',
                controller: 'myProfileController as mpc'
            })

            .state('myMaps', {
                url: '/myMaps',
                templateUrl: 'views/mapas/myMaps.html',
                controller: 'myMapsController as mmc'
            });

         $urlRouterProvider.otherwise('/dashboard/home');
    }
]);