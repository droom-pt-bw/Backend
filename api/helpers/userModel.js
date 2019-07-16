const db = require("../../data/dbConfig");


module.exports = {
    getUsers,
    getById,
    update

}


function getUsers() {
    return db('users');
}

function getJoblistings() {
    return db('companies')
        .join("joblistings", "company_id", "companies.id")
        .select(
            "joblisting.company",
            "joblisting.location",
            "joblisting.salary",
            "joblisting.jobtitle",
            "joblisting.description",
            "joblisting.createdAt",
        )
}


function getById(id) {
    return db('users').where({id}).first();
}

function update(id, changes) {
    return db('users')
        .where({id})
        .update(changes, '*')
}



