const db = require("../../data/dbConfig");
const seekers = require("./seekerModel")

module.exports = {
    seekerMatch,
    jobMatch
  };

  async function seekerMatch(user_id, jobId) {
    let { id } = await db('seekers')
        .where({ user_id })
        .first();

    let matched = await db('matches')
        .where({ seekerId: id, jobId })
        .first();

    if (matched && matched.jobMatch) {
        const updateMatched = {
            jobId,
            seekerId: id,
            seekerMatch: true,
            jobMatch: true,
            matched: true
        };
        return await db('matches')
            .where({ seekerId: id, jobId })
            .update(updateMatched);
    } else if (matched && matched.seekerMatch) {
        return 'match already exists';
    } else {
        const createMatch = {
            jobId,
            seekerId: id,
            seekerMatch: true,
            jobMatch: false,
            matched: true
        };
        return await db('matches')
            .where({ seekerId: id, jobId })
            .insert(createMatch);
    }
}

async function jobMatch(jobId, seekerId) {
    let matched = await db('matches')
        .where({ jobId, seekerId })
        .first();

    if (matched && matched.seekerMatch) {
        const updateMatched = {
            jobId,
            seekerId,
            seekerMatch: true,
            jobMatch: true,
            matched: true
        };
        return await db('matches')
            .where({ jobId, seekerId })
            .update(updateMatched);
    } else if (matched && matched.jobMatch) {
        return 'match already exists';
    } else {
        const createMatch = {
            jobId,
            seekerId,
            seekerMatch: false,
            jobMatch: true,
            matched: true
        };
        return await db('matches')
            .where({ jobId, seekerId })
            .insert(createMatch);
    }
}