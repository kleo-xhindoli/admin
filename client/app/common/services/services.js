import angular from 'angular';
import APIService from './API.service.js';
import SessionService from './session.service.js';
import AuthService from './auth.service.js'

let services = angular.module('services', [])

.service({APIService, SessionService, AuthService})
  
.name;

export default services;
