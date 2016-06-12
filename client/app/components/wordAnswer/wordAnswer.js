/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import wordAnswerComponent from './wordAnswer.component'

let wordAnswerModule = angular.module('wordAnswer', [
  uiRouter
])

.component('wordAnswer', wordAnswerComponent)

export default wordAnswerModule
