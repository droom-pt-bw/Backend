exports.up = async function(knex) {
    await knex.schema.createTable('joblisting', tbl => {
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
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
      tbl
          .string('appliers')
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT')

      tbl
          .string('confirmed')
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT')
          
    });
  };
  
  
  exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists('joblisting');
  };