'use strict';

/* Controllers */

var ethanControllers = angular.module('ethanControllers', []);

ethanControllers.controller('HomeProjectsCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
    $scope.quantity = 3;
  }]);

ethanControllers.controller('ProjectsListCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
  }]);

ethanControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('projects/' + $routeParams.projectId + '.json').success(function(data) {
      $scope.project = data;
    });
  }]);

// ethanControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'Project',
//   function($scope, $routeParams, Project) {
//     $scope.projectId = Project.get({projectId: $routeParams.projectId}, function(project) {
//       $scope.imageMain = project.images[0];
//     });

//     $scope.setImage = function(imageUrl) {
//       $scope.imageMain = imageUrl;
//     }
//   }]);

// ethanControllers.controller('AboutCtrl', ['$scope', 'About',
//   function($scope, About) {
//     $scope.about = About.query();
//   }]);

ethanControllers.controller('AboutCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    $http.get('projects/about.json').success(function(data) {
      $scope.about = data;
    });
  }]);

ethanControllers.controller('SkillzCtrl', ['$scope', '$http', 
  function ($scope, $http) {
    $http.get('projects/skillz.json').success(function(data) {
      $scope.skill = data;
    });

    $scope.orderProp = 'age';
  }]);