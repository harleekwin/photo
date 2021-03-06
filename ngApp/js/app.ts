'use strict';

namespace app {
    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker'])
      .config((
      $stateProvider: ng.ui.IStateProvider,
      $locationProvider: ng.ILocationProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      filepickerProvider) => {

      filepickerProvider.setKey('AYlIsIFSaRNm82R61GpBKz');

      $stateProvider.state('Home', {
        url: '/',
        templateUrl: '/templates/home.html',
        controller: app.Controllers.HomeController,
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);

      });
}
