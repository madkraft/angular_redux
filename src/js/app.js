import '../styles/main.styl'
import angular from 'angular'
import Example from './example'

import { examples, initialExamples } from './example/example-state'
import Store from './app.store'

const store = new Store(examples, initialExamples)

// Mount on window for testing
window.app = angular.module('app', [
  Example.name
]).value('store', store)

angular.bootstrap(document, ['app'], {
  strictDi: true
})
