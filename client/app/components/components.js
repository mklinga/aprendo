import angular from 'angular'
import Home from './home/home'
import Tester from './tester/tester'
import About from './about/about'

let componentModule = angular.module('app.components', [
  Home.name,
  Tester.name,
  About.name
])

export default componentModule
