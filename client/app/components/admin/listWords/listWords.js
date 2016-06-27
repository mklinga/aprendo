/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import listWordsComponent from './listWords.component'
import wordServiceFactory from './wordService/wordService.factory'
import editWord from './editWord/editWord'

const listWordsModule = angular
  .module('listWords', [
    uiRouter,
    editWord.name
  ])

  .component('listWords', listWordsComponent)
  .factory('WordService', wordServiceFactory)

  .config(($stateProvider) => {
    'ngInject'

    $stateProvider
      .state('admin-words', {
        url: '/admin/words',
        template: '<list-words></list-words>'
      })
  })
export default listWordsModule
