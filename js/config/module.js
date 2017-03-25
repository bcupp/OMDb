var app = angular.module('OMDBMod', ['ngRoute']);

app.config(function($routeProvider, $locationProvider ) {

    $routeProvider
        .when('/A NAME', {
            controller: 'CONTROLLER NAME',
            templateUrl: 'views/NAME.html'
        })
        .when('/A NAME', {
            controller: 'CONTROLLER NAME',
            templateUrl: 'views/NAME.html'
        })
        .otherwise('/A NAME', {
            controller: 'CONTROLLER NAME',
            templateUrl: 'views/NAME.html'
        });
    $locationProvider.html5Mode(false).hashPrefix('');


});
