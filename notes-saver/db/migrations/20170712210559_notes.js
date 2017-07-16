
exports.up = (knex, Promise) => {
  return knex.schema.createTable('notes', (table) =>
  {
    table.increments()
    table.string('note_content').notNullable()
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('notes')
};
