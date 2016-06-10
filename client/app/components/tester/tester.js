import angular from 'angular'
import uiRouter from 'angular-ui-router'
import testerComponent from './tester.component'

const testerModule = angular.module('tester', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject'

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('tester', {
      url: '/tester',
      template: '<tester></tester>'
    })
})

.component('tester', testerComponent)

export default testerModule
