import angular from 'angular'
import uiRouter from 'angular-ui-router'
import wordQuestionComponent from './wordQuestion.component'

let wordQuestionModule = angular.module('wordQuestion', [
  uiRouter
])

.component('wordQuestion', wordQuestionComponent)

export default wordQuestionModule
