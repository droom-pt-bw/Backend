exports.up = function(knex, Promise) {
    return knex.schema.createTable('joblisting', tbl => {
    tbl.increments("id");
      tbl
        .string('company', 255)
        .notNullable();
      tbl
        .string('location', 255)
        .notNullable();
      tbl
        .string('salary', 255)
        .notNullable();
      tbl
        .string('jobtitle', 255)
        .notNullable();
      tbl
        .string("description")
        .notNullable();
      tbl.datetime('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('joblisting');
  };