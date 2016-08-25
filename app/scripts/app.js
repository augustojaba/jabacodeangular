'use strict';

/**
 * @ngdoc overview
 * @name jabacodeAngularApp
 * @description
 * # jabacodeAngularApp
 *
 * Main module of the application.
 */
angular
  .module('jabacodeAngularApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'scripts/about/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/github', {
        templateUrl: 'scripts/github/users.html',
        controller: 'GithubCtrl',
        controllerAs: 'github'
      })
      .when('/github/repos/:id', {
        templateUrl: 'scripts/github/repos.html',
        controller: 'RepositoryCtrl',
        controllerAs: 'repository'
      })
      .when('/contact', {
        templateUrl: 'scripts/contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
