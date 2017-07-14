'use Strict'

process.env.NODE_ENV = 'test'

const Note = require('./Note')

const chai = require('chai')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)
const expect = chai.expect

const knexConfig = require('../../db/knex')
const db = knexConfig.knex
const server = require('../../app.js')

describe('Note module', () => {

  beforeEach(() => db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
  )

  afterEach(() => db.migrate.rollback() )

  describe('"POST /notes"', () => {

    it('should add an entry to Notes table', (done) => {
      chai.request(server)
      .post('/notes')
      .send({
        note_content: 'I am a note!'
      })
      .end(function(err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('object')
        expect(res.body.note_content).to.eq('I am a note!')
        done()
      })
    })
  })
})
