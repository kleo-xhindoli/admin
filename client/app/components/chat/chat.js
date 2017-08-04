import angular from 'angular';
import uiRouter from 'angular-ui-router';
import chatComponent from './chat.component';

let chatModule = angular.module('chat', [
  uiRouter
])

.component('chat', chatComponent)

.config(($stateProvider) => {
    "ngInject";
    $stateProvider
    .state('chat', {
        url: '/chat',
        component: 'chat'
    })
})

.name;

export default chatModule;
