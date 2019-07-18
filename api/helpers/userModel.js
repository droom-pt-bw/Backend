const db = require("../../data/dbConfig");


module.exports = {
    getUsers,
    getById,
    getSeekerInfo,
    getCompanyInfo,
    updateCompanyInfo,
    updateSeekerInfo,
    getJoblistings,
    addCompanyInfo,
    addSeekerInfo,
    findUsername

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

function addSeekerInfo(info) {
    return db('seekers')
        .insert(info)
        .then(ids => {
            return getById(ids[0]);
        })
}

function addCompanyInfo(info) {
    return db('companies')
        .insert(info)
        .then(ids => {
            return getById(ids[0]);
        })
}

function updateSeekerInfo(id, changes) {
    return db('seekers')
        .where({id})
        .update(changes, '*')
}

function updateCompanyInfo(id, changes) {
    return db('companies')
        .where({id})
        .update(changes, '*')
}


function getSeekerInfo(userId) {
    return db('seekers as s')
        .join('users', 's.user_id', 'users.id')
        .select('s.id as id', 's.name', 's.description', 's.location', 's.skills', 'users.id as user_id')
        .where({ "s.id": userId });
}

function getCompanyInfo(userId) {
    return db('companies as c')
        .join('users', 'c.user_id', 'users.id')
        .select('c.id as id', 'c.name', 'c.description', 'users.id as user_id')
        .where({ "c.id": userId });
}


function findSeeker(id) {
    return db('seekers as s')
        .where({'field': `${id}`})
        .join('comapnies', 's.user_id', '')
        .map(seeker)
}


function findUsername(db, username){
    return db(`${db}`).where({username}).first();
}