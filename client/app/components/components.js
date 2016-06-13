import angular from 'angular'
import Home from './home/home'
import Tester from './tester/tester'
import About from './about/about'

export default angular.module('app.components', [
  Home.name,
  Tester.name,
  About.name
])
