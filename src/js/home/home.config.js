export default function homeConfig ($stateProvider) {
  'ngInject'

  $stateProvider
  .state('home', {
    url: '/',
    template: '<home></home>'
  })
}
