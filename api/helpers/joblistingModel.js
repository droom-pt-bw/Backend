const db = require("../../data/dbConfig");

module.exports = {
  findJobs,
  getById,
  update,
  remove,
  insert,
};

function findJobs() {
  return db('joblisting');
};

function getById(id) {
  return db('joblisting').where({id}).first();
}

function insert(joblisting) {
  return db("joblisting")
    .insert(joblisting)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('joblisting')
    .where({id})
    .update(changes, '*');
}

function remove(id) {
  return db('joblisting')
    .where({id})
    .del();
}