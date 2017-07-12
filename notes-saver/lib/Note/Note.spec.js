'use Strict'

const Note = require('./Note')

const chai = require('chai')

const expect = chai.expect

describe('Note module', () => {
  describe('"create"', () => {
    it('should export a function', () => {
      expect(Note.create).to.be.a('function')
    })

    it('should return a promise', () => {
      const noteCreateActualResult = Note.create()
      expect(noteCreateActualResult.then).to.be.a('function')
      expect(noteCreateActualResult.catch).to.be.a('function')
    })
  })
})
