import angular from 'angular'
import Home from './home/home'
import Tests from './tests/tests'
import About from './about/about'
import Admin from './admin/admin'

export default angular.module('app.components', [
  Home.name,
  Tests.name,
  About.name,
  Admin.name
])
