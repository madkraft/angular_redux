export default class ExampleController {
  constructor (exampleService, exampleModel) {
    'ngInject'

    Object.assign(this, { exampleService, exampleModel })

    this.controllerName = 'Example controller'
    this.examples = exampleModel.getExamples()
  }
}
