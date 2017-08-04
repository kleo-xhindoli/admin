import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';

let authModule = angular.module('auth', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('auth', {
      url: '/',
      component: 'auth',
      name: 'login'
    })
    // .state('hello', {
    //   url: '/hello',
    //   template: '<div>Hello</div>',
    //   name: 'hello'
    // })
})

.component('auth', authComponent)

.name;

export default authModule;
