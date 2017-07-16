const knex = require('./knex.js').knex

function Notes() {
  return knex('notes')
}

function getAll() {
  return Notes().select()
}

function getSingle(noteId) {
  return Notes().where('id', parseInt(noteId)).first()
}

function add(note) {
  return Notes().insert(noteData, 'id')
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add
}
