import '../styles/main.styl'
import angular from 'angular'
import uiRouter from 'angular-ui-router'

import AppStore from './app.store'
import Config from './app.config'
import Navigation from './navigation'
import Example from './example'
import Home from './home'

import { categoriesReducer, initialCategories } from './example.state'

const store = new AppStore(categoriesReducer, initialCategories)

angular
  .module('app', [
    uiRouter,
    Navigation.name,
    Example.name,
    Home.name
  ])
  .config(Config)
  .value('store', store)

angular.bootstrap(document, ['app'], {
  strictDi: true
})
