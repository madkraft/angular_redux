import exampleTemplate from './example/example.html'

export default function Config ($stateProvider, $urlRouterProvider) {
  'ngInject'

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    // controller: 'HomeCtrl as homeCtrl',
    template: '<h1>Home</h1>'
  })
  .state('login', {
    url: '/login',
    template: '<h1>Login</h1>'
  })
  .state('example', {
    url: '/example',
    controller: 'exampleController as exampleCtrl',
    template: exampleTemplate
  })
}

