'use strict';

/**
 * @ngdoc function
 * @name jabacodeAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jabacodeAngularApp
 */
angular.module('jabacodeAngularApp')
  .controller('AboutCtrl', function ($http) {
    var teste = this;
    $http.get('/products.json').success(function(data){
      alert(msg);
      teste.mocks = data;
    }).error(function(msg){
      alert(msg);
    });

    teste.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
