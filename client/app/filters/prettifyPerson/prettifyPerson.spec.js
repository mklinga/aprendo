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
    expect(filter('1st')).to.equal('I')
    expect(filter('2nd')).to.equal('you')
    expect(filter('3rd')).to.equal('he/she/it')
    expect(filter('1stplural')).to.equal('we')
    expect(filter('2ndplural')).to.equal('you (plural)')
    expect(filter('3rdplural')).to.equal('they')
  })

  it('Should return a response based on input on wanted language', () => {
    expect(filter('1st', 'es')).to.equal('yo')
    expect(filter('2nd', 'es')).to.equal('tú')
    expect(filter('3rd', 'es')).to.equal('él/ella')
    expect(filter('1stplural', 'es')).to.equal('nosotros')
    expect(filter('2ndplural', 'es')).to.equal('vosotros')
    expect(filter('3rdplural', 'es')).to.equal('ellos')
  })
})
