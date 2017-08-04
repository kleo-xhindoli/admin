import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ticketComponent from './ticket.component';

let ticketModule = angular.module('ticket', [
  uiRouter
])

.component('ticket', ticketComponent)

.name;

export default ticketModule;
