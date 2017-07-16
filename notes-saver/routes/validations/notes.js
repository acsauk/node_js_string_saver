const joi = require('joi');

module.exports = {
  createNote: {
    body: {
      note_contents: joi.string().min(3)
    }
  }
}
