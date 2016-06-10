import angular from 'angular'
import uiRouter from 'angular-ui-router'
import testWordComponent from './testWord.component'

export default angular
  .module('testWord', [ uiRouter ])
  .component('testWord', testWordComponent)
