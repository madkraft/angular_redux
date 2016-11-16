class ExampleController {
  constructor (exampleService, exampleModel, ExampleActions, store) {
    'ngInject'

    this.controllerName = 'Example controller'
    this.examples = exampleModel.getExamples()
    this.store = store
    this.ExampleActions = ExampleActions
  }

  $onInit () {
    this.store.subscribe(() => {
      this.examples = this.store.getState()
    })

    this.store.dispatch(this.ExampleActions.getExamples())
  }
}

export default ExampleController
