/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import adminComponent from './admin.component'

import listWords from './listWords/listWords'

const adminModule = angular
  .module('admin', [ uiRouter, listWords.name ])

  .component('admin', adminComponent)

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('admin', {
        url: '/admin',
        template: '<admin></admin>'
      })
  })

export default adminModule
