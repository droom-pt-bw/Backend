exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
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
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  }; 