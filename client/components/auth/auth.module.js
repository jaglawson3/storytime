'use strict';

angular.module('storytimeApp.auth', [
  'storytimeApp.constants',
  'storytimeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
