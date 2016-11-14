(function (app) {
  'use strict'

  app.controller('MainController', MainController)

  MainController.$inject = ['$timeout', 'categoriesReducer', 'AppStore', 'categoriesActions']
  function MainController ($timeout, categoriesReducer, AppStore, categoriesActions) {
    var ctrl = this
    var currentCategory

    var store = new AppStore(categoriesReducer.categories, categoriesReducer.initialCategories)
    var unsub = store.subscribe(function () {
      ctrl.categories = store.getState()
    })
    store.dispatch(categoriesActions.getCategories())

    $timeout(function () {
      var payload = [
        {id: 0, name: 'Redux'},
        {id: 1, name: 'Anglar'}
      ]

      store.dispatch(categoriesActions.getCategories(payload))
      unsub()
    }, 3000)

    $timeout(function () {
      var payload = [
        {id: 0, name: 'Uh oh'}
      ]

      store.dispatch(categoriesActions.getCategories(payload))
    }, 6000)


    ctrl.onCategoryClick = function onCategoryClick (category) {
      currentCategory = categoriesReducer.category(currentCategory, categoriesActions.selectCategory(category))
      console.log('currentCategory', currentCategory)
    }

  }

})(angular.module('app'))
