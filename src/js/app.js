import '../styles/main.styl'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import Config from './app.config'
import Navigation from './navigation'
import Example from './example'
import Home from './home'

angular
  .module('app', [
    uiRouter,
    Navigation.name,
    Example.name,
    Home.name
  ])
  .config(Config)

angular.bootstrap(document, ['app'], {
  strictDi: true
})
