import angular from 'angular'
import uiRouter from 'angular-ui-router'
import testWordComponent from './testWord.component'

const testWordModule = angular.module('testWord', [
  uiRouter
])

.component('testWord', testWordComponent)

export default testWordModule
