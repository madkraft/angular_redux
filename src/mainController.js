(function (app) {
  'use strict'

  app.controller('MainController', MainController)

  MainController.$inject = ['$timeout', 'categoriesReducer', 'AppStore']
  function MainController ($timeout, categoriesReducer, AppStore) {
    var ctrl = this
    var currentCategory

    var store = new AppStore(categoriesReducer.categories, categoriesReducer.initialCategories)
    var unsub = store.subscribe(function () {
      ctrl.categories = store.getState()
    })
    store.dispatch({type: 'GET_CATEGORIES'})


    $timeout(function () {
      var payload = [
        {id: 0, name: 'Redux'},
        {id: 1, name: 'Anglar'}
      ]

      store.dispatch({type: 'GET_CATEGORIES', payload: payload})
      unsub()
    }, 3000)

    $timeout(function () {
      var payload = [
        {id: 0, name: 'Uh oh'}
      ]

      store.dispatch({type: 'GET_CATEGORIES', payload: payload})
    }, 6000)


    ctrl.onCategoryClick = function onCategoryClick (category) {
      currentCategory = categoriesReducer.category(currentCategory, {type: 'GET_CURRENT_CATEGORY', payload: category})
      console.log('currentCategory', currentCategory)
    }

  }

})(angular.module('app'))
