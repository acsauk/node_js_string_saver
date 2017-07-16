const express = require('express');
const validate = require('express-validation')
const validations = require('./validations/notes')
const router = express.Router();
const knex = require('../db/knex.js')
const queries = require('../db/queries.js')
const request = require('request');

/* GET specific note. */
router.get('/notes/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(note) {
    res.status(200).json(note.note_content)
  })
  .catch(function(error) {
    next(error)
  })
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
