import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';   
import ngMaterial from 'angular-material';
import froala from './froala/src/angular-froala';
// import 'normalize.css';
import '../../node_modules/angular-material/angular-material.min.css';

angular.module('app', [
    ngMaterial,
    uiRouter,
    Common,
    'froala',
    Components
  ])
  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $mdThemingProvider
    .theme('default')
    .primaryPalette('orange')
    .accentPalette('green')
    .warnPalette('red')
    .backgroundPalette('grey');
  })

  .component('app', AppComponent);
