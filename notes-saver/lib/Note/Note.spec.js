'use Strict'

process.env.NODE_ENV = 'test'

const Note = require('./Note')

const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
const expect = chai.expect

const db = require('../../db/knex').knex
const server = require('../../app.js')

describe('Note module', () => {

  beforeEach(() => db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
  )

  afterEach(() => db.migrate.rollback() )

  describe('"POST /notes"', () => {
    context('valid string', () => {
      it('should add an entry to Notes table', () => {
        return chai.request(server)
        .post('/notes')
        .send({
          note_content: 'I am a note!'
        })
        .then(function(res) {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          expect(res.body).to.be.a('object')
          expect(res.body.note_content).to.eq('I am a note!')
        })
      })
    })

    context('empty string', () => {
      it('should not add an entry to Notes table', () => {
        return chai.request(server)
        .post('/notes')
        .send({
          note_content: ''
        })
        .then(function(res) {
          expect(res).to.have.status(500)
          expect(res).to.be.json
          expect(res.body).to.be.a('object')
          expect(res.body[0]).to.have.property('message')
          expect(res.body[0]).to.have.property('error')
        })
      })
    })
  })


  describe('"GET /notes/:id"', () => {

    it('should get a specific note by id', () => {
      return chai.request(server)
      .get('/notes/1')
      .then(function(res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('string')
        expect(res.body).to.eq('Note content goes here')
      })
    })
  })
})
