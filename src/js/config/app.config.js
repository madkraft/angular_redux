import home from '../pages/home.html'
import login from '../pages/login.html'
import about from '../pages/about.html'

export default function routing ($stateProvider, $urlRouterProvider) {
  'ngInject'

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('app', {
      url: '/',
      template: home
    })
    .state('login', {
      url: '/login',
      template: login
    })
    .state('about', {
      url: '/about',
      template: about
    })
}
