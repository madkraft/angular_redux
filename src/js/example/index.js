import angular from 'angular'

import exampleConfig from './example.config'
import ExampleService from './example.service'
import ExampleModel from './example.model'
import ExampleComponent from './example.component'

export default angular.module('Example', [])
  .config(exampleConfig)
  .component('example', ExampleComponent)
  .service('exampleService', ExampleService)
  .service('exampleModel', ExampleModel)
