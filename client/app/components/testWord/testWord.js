/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import testWordComponent from './testWord.component'
import wordQuestionComponent from '../wordQuestion/wordQuestion.component'
import wordAnswerComponent from '../wordAnswer/wordAnswer.component'

export default angular
  .module('testWord', [ uiRouter ])
  .component('wordQuestion', wordQuestionComponent)
  .component('wordAnswer', wordAnswerComponent)
  .component('testWord', testWordComponent)
