'use strict';

/**
 * @ngdoc overview
 * @name webControllerApp
 * @description
 * # webControllerApp
 *
 * Main module of the application.
 */
angular
  .module('webControllerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngWebSocket'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/controller/:roomId', {
        templateUrl: 'views/controller.html',
        controller: 'ControllerCtrl',
        controllerAs: 'controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
