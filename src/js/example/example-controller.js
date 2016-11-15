export default class ExampleController {
  constructor (exampleService) {
    'ngInject'

    this.controllerName = 'Example controller'
    this.categories = [
      {'id': 0, 'name': 'Development!'},
      {'id': 1, 'name': 'Design'},
      {'id': 2, 'name': 'Exercise'},
      {'id': 3, 'name': 'Humor'}
    ]
  }
}
