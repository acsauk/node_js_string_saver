const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js')
const queries = require('../db/queries.js')

/* GET home page. */
router.get('/notes', function(req, res, next) {
  res.send('responds with all notes')
});

// POST add a note
router.post('/notes', function(req, res, next) {
  queries.add(req.body)
    .then(function(noteId) {
      return queries.getSingle(noteId)
    })
    .then(function(note) {
      res.status(200).json(note)
    })
    .catch(function(error) {
      next(error);
    })
  })

module.exports = router;
