const db = require("../../data/dbConfig");

module.exports = {
  add,
  findById,
  update,
  remove
};

async function add(profile) {
  const [id] = await db("companies").insert(profile);
  return db("companies")
    .where({ id })
    .first();
}

function findById(user_id) {
  return db("companies")
    .where({ user_id })
    .first();
}

async function update(user_id, changes) {
	await db('companies')
		.where({user_id })
		.update(changes);

	return findById(user_id)
}

async function remove(user_id) {
	return db('companies')
    .where({user_id})
    .del();
}