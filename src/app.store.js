(function (app) {
  'use strict'

  app.factory('AppStore', AppStore)

  function AppStore() {
    var store = function (reducer, initialState) {
      var reducer = reducer
      var state = initialState
      var listeners = []

      var getState = function getState () {
        return state
      }

      var dispatch = function dispatch (action) {
        state = reducer(state, action)
        listeners.forEach(function (listener) {
          return listener()
        })
      }

      var subscribe = function subscribe (subListener) {
        listeners = [].concat(listeners, subListener)

        return function () {
          listeners = listeners.filter(function (listener) {
            return listener !== subListener
          })
        }
      }

      return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
      }
    }

    return store
  }

})(angular.module('app'))
