export default function exampleConfig ($stateProvider) {
  'ngInject'

  $stateProvider
  .state('example', {
    url: '/example',
    // component: 'example'
    template: '<example></example>'
  })
}
