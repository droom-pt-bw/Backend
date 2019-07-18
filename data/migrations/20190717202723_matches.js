exports.up = async function(knex) {
    await knex.schema.createTable('matches', tbl => {
        tbl.increments("id");

		tbl.integer('jobId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('joblisting')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.integer('seekerId', 128)
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('seekers')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.boolean('seekerMatch').defaultTo(false);
		tbl.boolean('jobMatch').defaultTo(false);
		tbl.boolean('matched').defaultTo(false);
          
    });
  };
  
  
  exports.down = async function(knex, Promise) {
    await knex.schema.dropTableIfExists('matches');
  };