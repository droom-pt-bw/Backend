const db = require("../../data/dbConfig");


module.exports = {
    getUsers,
    getById,
    update,
    getJoblistings

}


function getUsers() {
    return db('users');
}

function getJoblistings(userId) {
    return db('joblisting as j')
        .join('users', 'j.user_id', 'users.id')
        .select('j.id as id', 'j.company', 'j.description', 'j.location', 'j.jobtitle',"j.salary", "j.createdAt", 'users.id as user_id')
        .where({ "user_id": userId });
}


function getById(id) {
    return db('users').where({id}).first();
}

function update(id, changes) {
    return db('users')
        .where({id})
        .update(changes, '*')
}



