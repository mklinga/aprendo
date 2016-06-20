import angular from 'angular'
import Navbar from './navbar/navbar'
import TimeConjugations from './timeConjugations/timeConjugations'
import PersonConjugations from './personConjugations/personConjugations'

export default angular.module('app.common', [
  Navbar.name,
  TimeConjugations.name,
  PersonConjugations.name
])
