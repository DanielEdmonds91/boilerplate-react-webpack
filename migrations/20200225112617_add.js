
exports.up = function(knex) {
  return knex.schema.createTable('robots', table => {
      table.increments('id')
      table.string('name')
      table.string('number')
      table.string('email')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('robots')
};
