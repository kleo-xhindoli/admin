import angular from 'angular';
import uiRouter from 'angular-ui-router';
import infoCardsCreateComponent from './infoCardsCreate.component';

let infoCardsCreateModule = angular.module('infoCardsCreate', [
  uiRouter
])

.component('infoCardsCreate', infoCardsCreateComponent)

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
    .state('create', {
        url: '/create',
        component: 'infoCardsCreate'
    })
    .state('edit', {
        url: '/edit/:infocardId',
        component: 'infoCardsCreate'
    });
})


.name;

export default infoCardsCreateModule;
