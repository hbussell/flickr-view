require('angular/angular');  
require('angular-route/angular-route');  
var controllers = require('./controllers');

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$httpProvider',  
  function($routeProvider, $httpProvider) {
    $routeProvider.when('/photos', {
      templateUrl: './views/photos.html', 
      controller: 'PhotoCtrl'
    }).otherwise({redirectTo: '/photos'});
  }
]); 

app.controller('PhotoCtrl', ['$scope', controllers.PhotoCtrl]);  
