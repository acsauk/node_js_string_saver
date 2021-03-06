'use Strict'

function curlHandler(note) {
  let noteKey = ''
  let noteValue = ''

  for (var key in note) {
    noteKey = key
    noteValue = note[key]
  }

  let noteData = noteValue == '' && noteKey != 'note_content' ? { note_content: noteKey } : note
  return noteData
}

module.exports = {
  curlHandler
}
