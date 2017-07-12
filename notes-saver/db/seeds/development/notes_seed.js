
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, note_content: 'Note content goes here'},
        {id: 2, note_content: 'Some more note content goes here'},
        {id: 3, note_content: 'And yet more note content goes here'}
      ]);
    });
};
