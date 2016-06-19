/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'

import successViewerComponent from './successViewer/successViewer.component'
import testWordComponent from './testWord/testWord.component'
import testerComponent from './tester.component'
import wordAnswerComponent from './wordAnswer/wordAnswer.component'
import wordQuestionComponent from './wordQuestion/wordQuestion.component'

import questionWordFactory from './factories/questionWord/questionWord.factory'
import Filters from './filters/filters'

const testerModule = angular
  .module('tester', [ uiRouter, Filters.name ])
  .factory('QuestionWordFactory', questionWordFactory)
  .component('successViewer', successViewerComponent)
  .component('testWord', testWordComponent)
  .component('wordAnswer', wordAnswerComponent)
  .component('wordQuestion', wordQuestionComponent)
  .component('tester', testerComponent)

export default testerModule
