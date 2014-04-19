'use strict';

var ethanApp = angular.module('ethanApp', [
  'ngRoute',
  'ethanControllers',
  'ethanDirectives',
  'ethanServices'
]);

ethanApp.config(['$routeProvider', 
  function($routeProvider) {
    $routeProvider.
      when('/', {
      	templateUrl: 'partials/homepage.html'
      }).
      when('/about-me', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      when('/projects', {
        templateUrl: 'partials/projects-list.html',
        controller: 'ProjectsListCtrl'
      }).
      when('/projects/:projectId', {
        templateUrl: 'partials/project-detail.html',
        controller: 'ProjectDetailCtrl'
      });

    // $locationProvider.html5Mode(true);
  }]);