'use Strict'

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile.js')[environment]

module.exports = {
  environment, config
}
