'use strict';

/**
 * @ngdoc function
 * @name jabacodeAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jabacodeAngularApp
 */
angular.module('jabacodeAngularApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/posts').success(function(data){
      $scope.mocks = data;
    }).error(function(msg){
      alert(msg);
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'Angula2rJS',
      'Karma'
    ];
  });
