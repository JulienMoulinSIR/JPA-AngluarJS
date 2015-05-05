'use strict';

/**
 * @ngdoc overview
 * @name tpJpaAngularApp
 * @description
 * # tpJpaAngularApp
 *
 * Main module of the application.
 */
angular
  .module('tpJpaAngularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/homes', {
        templateUrl: 'views/homes.html',
        controller: 'HomesCtrl'
      })
      .when('/persons', {
        templateUrl: 'views/persons.html',
        controller: 'PersonsCtrl'
      })
      .when('/addPerson', {
        templateUrl: 'views/formPerson.html'
      })
      .when('/devices', {
        templateUrl: 'views/devices.html',
        controller: 'DevicesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
