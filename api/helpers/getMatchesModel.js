const db = require("../../data/dbConfig");
const Jobs = require("./joblistingModel")

module.exports = {
	getMatchedJobs,
	getMatchedSeekers
};

async function getMatchedJobs(user_id) {
	let { id } = await db('seekers')
		.where({ user_id })
		.first()

	const matches = await db('matches').where({ seekerId: id });

	let jobs = matches.filter(job => job.matched);

	jobs = await Promise.all(
		jobs.map(async job => await Jobs.getById(job.jobId))
	);
	return jobs;
}

async function getMatchedSeekers(jobId) {
    
	let matches = await db('matches').where({ jobId });
	let seekers = matches.filter(match => match.matched);

	seekers = await Promise.all(
		seekers.map(
			async seeker =>
				await db('seekers')
					.where({
						id: seeker.seekerId
					})
					.first()
		)
	);
	return seekers;
}