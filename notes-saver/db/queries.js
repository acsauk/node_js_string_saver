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
  let noteKey = ''
  let noteValue = ''

  for (var key in note) {
    noteKey = key
    noteValue = note[key]
  }

  let noteData = noteValue == '' ? { note_content: noteKey } : note
  return Notes().insert(noteData, 'id')
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add
}
