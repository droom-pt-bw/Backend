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
      .integer("company_id")
      .references("id")
      .inTable("companies")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    });
  };
  
  exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists('joblisting');
  };