exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('notes').del()
  .then( () => {
    // Inserts seed entries
    return knex('notes').insert([
      {note_content: 'Note content goes here'},
      {note_content: 'Some more note content goes here'},
      {note_content: 'And yet more note content goes here'}
    ]);
  });
};
