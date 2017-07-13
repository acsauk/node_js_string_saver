'use Strict'

const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]
const createKnex = require('knex')
const knex = createKnex(config)

module.exports = {
  environment, config, knex
}
