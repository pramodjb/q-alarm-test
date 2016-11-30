'use strict';

/**
 * @ngdoc overview
 * @name alarm
 * @description
 * # alarm
 *
 * Main module of the application.
 */
angular
  .module('alarm', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/getapi.html',
        controller: 'GetapiCtrl',
        controllerAs: 'Ctrl'
      })
      // .when('/getapi', {
      //   templateUrl: 'views/getapi.html',
      //   controller: 'GetapiCtrl',
      //   controllerAs: 'Ctrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
