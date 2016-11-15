import '../styles/main.styl'
import angular from 'angular'
// import uiRouter from 'angular-ui-router'

import ExampleController from './example/example-controller'
import ExampleService from './example/example-service'

// Mount on window for testing
window.app = angular.module('app', [])
  .controller('exampleController', ExampleController)
  .service('exampleService', ExampleService)

angular.bootstrap(document, ['app'], {
  strictDi: true
})
