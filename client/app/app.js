import angular from 'angular'
import uiRouter from 'angular-ui-router'
import Common from './common/common'
import Components from './components/components'
import AppComponent from './app.component'
import Constants from './constants'

import 'restangular'
import 'normalize.css'

angular.module('app', [
  uiRouter,
  'restangular',
  Common.name,
  Components.name,
  Constants.name
])
  .config(($locationProvider) => {
    'ngInject'
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!')
  })

  .config((RestangularProvider) => {
    'ngInject'

    RestangularProvider.setBaseUrl('http://localhost:9000')
  })

  .component('app', AppComponent)
