// import template from './example.template.html'

export default function exampleConfig ($stateProvider) {
  'ngInject'

  $stateProvider
  .state('example', {
    url: '/example',
    template: '<example></example>'
  })
}
