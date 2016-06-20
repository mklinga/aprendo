import angular from 'angular'
import Navbar from './navbar/navbar'
import TimeConjugations from './timeConjugations/timeConjugations'

export default angular.module('app.common', [
  Navbar.name,
  TimeConjugations.name
])
