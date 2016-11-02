(function (app) {
  'use strict'

  app.service('categoriesReducer', categoriesReducer)

  function categoriesReducer() {
    var initialCategories = [
      {id: 0, name: 'Initial'},
      {id: 1, name: 'Categories'}
    ]

    var categories = function categories (state, args) {
      // debugger
      if (!state) {
        state = initialCategories
      }

      switch (args.type) {
        case 'GET_CATEGORIES':
          return args.payload || state
        default:
          return state
      }
    }

    var category = function categories (state, args) {
      // debugger
      if (!state) {
        state = {}
      }

      switch (args.type) {
        case 'GET_CURRENT_CATEGORY':
          return args.payload || state
        default:
          return state
      }
    }

    return {
      initialCategories: initialCategories,
      categories: categories,
      category: category
    }
  }

})(angular.module('app'))
