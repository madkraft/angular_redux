export default class ExampleController {
  constructor (exampleService, exampleModel) {
    'ngInject'

    this.controllerName = 'Example controller'
    this.examples = exampleModel.getExamples()
  }
}
