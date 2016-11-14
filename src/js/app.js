import '../styles/main.styl'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import appConfig from './config/app.config'
// import constants from './config/app.constants'
import componentsModule from './components/components'
import authenticationModule from './auth/auth'

// Create and bootstrap application
const requires = [
  uiRouter,
  componentsModule.name,
  authenticationModule.name
]

// Mount on window for testing
window.app = angular.module('app', requires)

// angular.module('app').constant('AppConstants', constants)

angular.module('app').config(appConfig)

angular.bootstrap(document, ['app'], {
  strictDi: true
})
