import angular from 'angular';
import Toolbar from './toolbar/toolbar';
import User from './user/user';
import services from './services/services';
import SideNav from './sideNav/sideNav'
import Ticket from './ticket/ticket'

let commonModule = angular.module('app.common', [
  Toolbar,
  SideNav,
  User,
  services,
  Ticket
])
  
.name;

export default commonModule;
