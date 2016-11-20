export default function Config ($stateProvider, $urlRouterProvider) {
  'ngInject'

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('login', {
    url: '/login',
    template: '<h1>Login</h1>'
  })
}
