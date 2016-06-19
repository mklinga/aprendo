import prettifyPersonFilter from './prettifyPerson.filter'

import { expect } from 'chai'

describe('(Filter) prettifyPerson', () => {
  let filter
  
  beforeEach(() => {
    filter = new prettifyPersonFilter()
  })

  it('Should be a function', () => {
    expect(filter).to.be.a('function')
  })

  it('Should return a response based on input', () => {
    expect(filter('1')).to.equal('I')
    expect(filter('2')).to.equal('you')
    expect(filter('3')).to.equal('he/she/it')
    expect(filter('4')).to.equal('we')
    expect(filter('5')).to.equal('you (plural)')
    expect(filter('6')).to.equal('they')
  })

  it('Should return a response based on input on wanted language', () => {
    expect(filter('1', '1')).to.equal('yo')
    expect(filter('2', '1')).to.equal('tú')
    expect(filter('3', '1')).to.equal('él/ella')
    expect(filter('4', '1')).to.equal('nosotros')
    expect(filter('5', '1')).to.equal('vosotros')
    expect(filter('6', '1')).to.equal('ellos')
  })
})
