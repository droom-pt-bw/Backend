const db = require("../../data/dbConfig");

module.exports = {
  findJobs
};

function findJobs() {
    return db('joblisting');
  };