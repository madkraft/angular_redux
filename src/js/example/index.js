import angular from 'angular'

import exampleConfig from './example.config'
import ExampleComponent from './example.component'
import ExampleActions from './example.actions'
import ExampleModel from './example.model'


export default angular.module('Example', [])
  .config(exampleConfig)
  .component('example', ExampleComponent)
  .service('ExampleActions', ExampleActions)
  .service('exampleModel', ExampleModel)
