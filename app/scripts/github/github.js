'use strict';

/**
 * @ngdoc function
 * @name jabacodeAngularApp.controller:AboutCtrl
 * @description
 * # GithubCtrl
 * Controller of the jabacodeAngularApp
 */
angular.module('jabacodeAngularApp')

  .controller('GithubCtrl', function ($scope, $http, $interval,
                                      $log, $anchorScroll) {
    $scope.username = 'augustojaba';

    $scope.search = function (username) {

      $http.get('https://api.github.com/users/' + username)
        .then(onUserComplete, onError);
    };

    var onUserComplete = function (response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url).then(onRepos, onError);
    }

    var onRepos = function (response) {
      $scope.repos = response.data;
      $anchorScroll('userDetails');
    }

    var onError = function (reason) {
      $scope.error = 'Could not fetch the data.';
      $log.error(reason);
    }

    $scope.getRepoDetails = function (repo) {
      alert(JSON.stringify(repo));
    };

  })

  .controller('RepositoryCtrl', function ($scope, $http, $routeParams, $log) {

    var onReposComplete = function (response) {
      $scope.repos = response.data;
    }

    var onError = function (reason) {
      $scope.error = 'Could not fetch the data.';
      $log.error(reason);
    }

    $http.get('https://api.github.com/repos/augustojaba/' + $routeParams.id)
      .then(onReposComplete, onError);

  })

  .directive('repoList', function () {
    return {
      restrict: "E",
      templateUrl: "scripts/github/repo-list.html",
      scope: {
        repo: "="
      }
    }

  });
