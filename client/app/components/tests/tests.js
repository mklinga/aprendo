/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import testsComponent from './tests.component'
import Tester from './tester/tester'
import TestSelector from './testSelector/testSelector'

const testsModule = angular
  .module('tests', [
    uiRouter,
    Tester.name,
    TestSelector.name
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'

    $stateProvider
      .state('tests', {
        url: '/tests',
        template: '<tests></tests>'
      })
  })

.component('tests', testsComponent)

export default testsModule
