import angular from 'angular';
import uiRouter from 'angular-ui-router';
import infoCardsComponent from './infoCards.component';

let infoCardsModule = angular.module('infoCards', [
  uiRouter
])

.component('infoCards', infoCardsComponent)

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
    .state('info-cards', {
        url: '/info-cards',
        component: 'infoCards'
    })
})

.name;

export default infoCardsModule;
