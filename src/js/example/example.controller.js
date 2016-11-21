export default class ExampleController {
  constructor ($timeout, ExampleActions, exampleModel, store) {
    'ngInject'

    Object.assign(this, {
      $timeout,
      ExampleActions,
      exampleModel,
      store
    })

    this.controllerName = 'Example controller'
    this.examples = exampleModel.getExamples()
  }

  $onInit () {
    this.store.subscribe(() => {
      this.categories = this.store.getState()
    })
    this.store.dispatch(this.ExampleActions.getCategories())

    this.$timeout(() => {
      const categories = [
        {id: 0, name: 'Redux'},
        {id: 1, name: 'Angular'}
      ]

      this.store.dispatch(this.ExampleActions.getCategories(categories))
    }, 2000)

    this.$timeout(() => {
      const categories = [
        { id: 0, name: 'Un Oh!' }
      ]

      this.store.dispatch(
        this.ExampleActions.getCategories(categories)
      )
    }, 3000)
  }
}
