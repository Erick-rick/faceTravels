var myApp = angular.module('mapApp', ['ui.router'])

.config(["$stateProvider", "$urlRouterProvider", "$httpProvider",
    function($stateProvider, $urlRouterProvider, $httpProvider) {

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

            .state('myProfile', {
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
            })

            .state('usersNew', {
                url: '/usersNew',
                templateUrl: 'views/user/new.html',
                controller: 'usersNewController as unc'
            });

        // browser will not pop up an authentication dialog
        //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $httpProvider.defaults.headers.post = 'Content-Type: application/json';

        $urlRouterProvider.otherwise('/dashboard/home');
    }
]);