const db = require("../../data/dbConfig");

module.exports = {
  add,
  findById,
  update,
  remove
};

async function add(profile) {
  const [id] = await db("seekers").insert(profile);
  return db("seekers")
    .where({ id })
    .first();
}

function findById(user_id) {
  return db("seekers")
    .where({ user_id })
    .first();
}

async function update(user_id, changes) {
	await db('seekers')
		.where({user_id })
		.update(changes);

	return findById(user_id)
}

async function remove(user_id) {
	return db('seekers')
    .where({user_id})
    .del();
}