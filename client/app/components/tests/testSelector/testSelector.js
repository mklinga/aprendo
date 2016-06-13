/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import testSelectorComponent from './testSelector.component'

const testSelectorModule = angular
  .module('testSelector', [ uiRouter ])

  .component('testSelector', testSelectorComponent)

export default testSelectorModule
