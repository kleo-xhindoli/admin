import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sideNavComponent from './sideNav.component';

let sideNavModule = angular.module('sideNav', [
  uiRouter
])

.component('sideNav', sideNavComponent)

.name;

export default sideNavModule;
