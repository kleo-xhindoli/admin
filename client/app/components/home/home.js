import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
// import API from '../../common/API/API'

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('tickets', {
      url: '/tickets',
      component: 'home',
      name: 'tickets'
    })
    // .state('hello', {
    //   url: '/hello',
    //   template: '<div>Hello</div>',
    //   name: 'hello'
    // })
})

.component('home', homeComponent)
  
.name;

export default homeModule;
