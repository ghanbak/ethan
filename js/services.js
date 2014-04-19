'use strict';

/* Services */

var ethanServices = angular.module('ethanServices', ['ngResource']);

ethanServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);

// ethanServices.factory('About', ['$resource',
//   function($resource){
//     return $resource('projects/about.json', {}, {
//     	get: {method: 'GET'}
//     });
//   }]);