import angular from 'angular'

import homeConfig from './home.config'
import homeComponent from './home.component'

export default angular.module('Home', [])
  .config(homeConfig)
  .component('home', homeComponent)
