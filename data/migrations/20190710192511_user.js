exports.up = async function(knex) {

    await knex.schema.createTable('users', tbl => {
      tbl.increments("id");
      tbl
        .string('username', 255)
        .notNullable()
        .unique();
      tbl
        .string('password', 255)
        .notNullable();
      tbl
        .string('email', 255)
        .notNullable()
        .unique();
      tbl
        .boolean('isCompany') //true is company fale basic user 
        .notNullable();
      tbl.datetime('createdAt').defaultTo(knex.fn.now());
    });

    await knex.schema.createTable("companies", tbl => {
      tbl.increments("id");
      tbl
        .string("name")
        .notNullable();
      tbl
        .string("description");
      tbl
        .string("location");
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
    });

    await knex.schema.createTable("seekers", tbl => {
      tbl.increments("id");
      tbl
        .string("name")
        .notNullable();
      tbl
        .string("description");
      tbl
        .string("skills");
      tbl
        .string("location");
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNullable();
    });

  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('seekers');
    await knex.schema.dropTableIfExists('companies');
    await knex.schema.dropTableIfExists('users');
  }; 