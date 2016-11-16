import angular from 'angular'

import ExampleController from './example-controller'
import ExampleService from './example-service'
import ExampleModel from './example-model'
import { ExampleActions } from './example-state';

export default angular.module('Example', [])
  .controller('exampleController', ExampleController)
  .service('exampleService', ExampleService)
  .service('exampleModel', ExampleModel)
  .factory('ExampleActions', ExampleActions)
