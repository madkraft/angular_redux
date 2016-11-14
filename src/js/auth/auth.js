import angular from 'angular'
import template from './auth.html'

class AuthController {
  constructor () {
    'ngInject'
  }
}

const AuthComponent = {
  template,
  controller: AuthController,
  controllerAs: 'authCtrl'
}

const AuthModule = angular.module('auth', [])
    .component('auth', AuthComponent)

export default AuthModule
