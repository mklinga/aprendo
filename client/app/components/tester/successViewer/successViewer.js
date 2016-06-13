import angular from 'angular'
import uiRouter from 'angular-ui-router'
import successViewerComponent from './successViewer.component'

let successViewerModule = angular.module('successViewer', [
  uiRouter
])

.component('successViewer', successViewerComponent)

export default successViewerModule
