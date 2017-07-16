const express = require('express');
const validations = require('./validations/notes')
const Joi = require('Joi')
const router = express.Router();
const knex = require('../db/knex.js')
const queries = require('../db/queries.js')
const request = require('request');
const Note = require('../lib/Note/Note.js')

/* GET specific note. */
router.get('/notes/:id',(req, res, next) => {
  queries.getSingle(req.params.id)
  .then((note) => {
    res.status(200).json(note.note_content)
  })
  .catch((error) => {
    next(error)
  })
});

// POST add a note
router.post('/notes', (req, res, next) => {
  const ret = Joi.validate(Note.curlHandler(req.body), validations.addNoteSchema, {
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString())
  } else {
  queries.add(ret.value)
    .then((noteId) => {
      return queries.getSingle(noteId)
    })
    .then((note) => {
      res.status(200).json(note)
    })
    .catch((error) => {
      next(error)
    })
  }
})

module.exports = router;
