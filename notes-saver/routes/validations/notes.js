const joi = require('joi');

module.exports = {
  addNoteSchema: {
    note_content: joi.string().required()
  }
}
