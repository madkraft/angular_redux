export default class ExampleService {
  constructor ($http) {
    'ngInject'

    this.$http = $http
  }

  getData () {
    return this.$http({method: 'GET', url: './api'})
  }
}
