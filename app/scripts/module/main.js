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
                params: {
                    mensagem: null
                },
                templateUrl: 'views/home/home.html',
                controller: 'homeController as hc'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'views/login/login.html',
                controller: 'loginController as lc'
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
            })

            .state('usersList', {
                url: '/usersList',
                templateUrl: 'views/user/list.html',
                controller: 'usersListController as ulc'
            });

         $urlRouterProvider.otherwise('/dashboard/home');
    }
]);