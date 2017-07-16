const joi = require('joi');

module.exports = {
  addNoteSchema: {
    note_content: joi.string().min(3)
  }
}
