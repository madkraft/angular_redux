import '../styles/main.styl'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import Config from './app.config'
import Example from './example'

// Mount on window for testing
angular
  .module('app', [
    uiRouter,
    Example.name
  ])
  .config(Config)

angular.bootstrap(document, ['app'], {
  strictDi: true
})
