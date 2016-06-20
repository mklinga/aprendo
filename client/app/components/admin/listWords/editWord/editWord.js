/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import editWordComponent from './editWord.component'

const editWordModule = angular
  .module('editWord', [ uiRouter ])

  .config(($stateProvider) => {
    'ngInject'

    $stateProvider
      .state('admin-edit-word', {
        url: '/admin/words/:id',
        template: '<edit-word></edit-word>'
      })
  })
  .component('editWord', editWordComponent)

export default editWordModule
