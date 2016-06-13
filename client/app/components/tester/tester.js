/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import testerComponent from './tester.component'
import testWordComponent from './testWord/testWord.component'
import wordQuestionComponent from './wordQuestion/wordQuestion.component'
import wordAnswerComponent from './wordAnswer/wordAnswer.component'
import questionWordFactory from 'factories/questionWord/questionWord.factory'

const testerModule = angular
  .module('tester', [ uiRouter ])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject'

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('tester', {
        url: '/tester',
        template: '<tester></tester>'
      })
  })

  .factory('QuestionWordFactory', questionWordFactory)
  .component('testWord', testWordComponent)
  .component('wordAnswer', wordAnswerComponent)
  .component('wordQuestion', wordQuestionComponent)
  .component('tester', testerComponent)

export default testerModule
