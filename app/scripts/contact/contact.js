/**
 * Created by augusto on 20/09/2016.
 */

'use strict';

angular.module('jabacodeAngularApp')
  .controller('ContactCtrl', function ($scope, $http, $interval) {

    $scope.show = false;
    $scope.countdown = 5;

    $scope.showNow = function() {
      $interval.cancel(countDownInterval);
      $scope.countdown = null;
      $scope.show = true;
    }

    var decrementCountDown = function() {
      $scope.countdown -= 1;
      if($scope.countdown < 1) {
        $scope.showNow();
      }
    };

    var countDownInterval = null;

    (function() {
      countDownInterval = $interval(decrementCountDown, 1000, $scope.countdown);
    })();


  });
