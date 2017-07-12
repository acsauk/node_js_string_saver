'use Strict'

const Note = require('./Note')

const chai = require('chai')

const expect = chai.expect

describe('Note module', () => {
  describe('"create"', () => {
    it('should export a function', () => {
      expect(Note.create).to.be.a('function')
    })
  })
})
