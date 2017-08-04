import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import InfoCards from './infoCards/infoCards';
import InfoCardsCreate from './infoCardsCreate/infoCardsCreate';
import Chat from './chat/chat';
import Auth from './auth/auth'
import Profile from './profile/profile'

let componentModule = angular.module('app.components', [
  Auth,
  Home,
  About,
  InfoCards,
  InfoCardsCreate,
  Chat,
  Profile
])
  
.name;

export default componentModule;
