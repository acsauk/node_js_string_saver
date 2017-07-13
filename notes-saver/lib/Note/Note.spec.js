'use Strict'

const Note = require('./Note')

const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
const expect = chai.expect

const knexConfig = require('../../db/knex')
const db = knexConfig.knex
const server = require('../../app.js')

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

    it('should add an entry to Notes table', (done) => {
      chai.request(server)
        .post('/notes')
        .send({
          note_contents: 'I am a note!'
        })
        .end(function(err, res) {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.a('object')
          expect(res.body.note_contents).to.eql('I am a note!')
          done()
        })
    })
  })
})
