var app = angular.module("myApp", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
        .when("/4", {
            templateUrl : "main.html"
        })
        .when("/red", {
            templateUrl : "red.htm"
        })
        .when("/green", {
            templateUrl : "green.htm"
        })
        .when("/blue", {
            templateUrl : "blue.htm"
        });
});