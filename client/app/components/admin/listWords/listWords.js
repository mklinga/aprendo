/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import listWordsComponent from './listWords.component'

const listWordsModule = angular
  .module('listWords', [ uiRouter ])

  .component('listWords', listWordsComponent)

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('admin-words', {
        url: '/admin/words',
        template: '<list-words></list-words>'
      })
  })
export default listWordsModule
