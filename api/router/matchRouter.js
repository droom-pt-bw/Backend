const express = require("express");
const router = express.Router();
const seekers = require("../../api/helpers/seekerModel");
const matches = require("../../api/helpers/matchesModel");
const companies = require("../../api/helpers/companyModel");
const jobs = require("../helpers/joblistingModel");
const users = require("../../api/helpers/userModel");

router.get('/seeker/:id/match/job/:jobId', async (req, res) => {
	try {
		const { id, jobId } = req.params;

		const seeker = await seekers.findById(id);

		if (!seeker)
			return res.status(404).json({
				message:
					'Sorry, but that profile does not exist'
			});

		const job = await jobs.getById(jobId);

		if (!job)
			return res.status(404).json({
				message: 'Sorry, but that job does not exist'
			});

		const match = await matches.seekerMatch(id, jobId);

		res.status(200).json({
			message:
				'Seeker has sent a match request successfully.',
			match
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while creating match',
			err
		});

		throw new Error(err);
	}
});

router.get('/job/:id/match/seeker/:seekerId', async (req, res) => {
	try {
		const { id, seekerId } = req.params;

		const job = await jobs.getById(id);

		if (!job)
			return res.status(404).json({
				message: 'Sorry, but that job does not exist'
			});

		const seeker = await users.getById(seekerId);

		if (!seeker)
			return res.status(404).json({
				message:
					'Sorry, but that profile does not exist'
			});

		const match = await matches.jobMatch(id, seekerId);

		res.status(200).json({
			message: 'Job has sent a match request successfully.',
			match
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while creating match',
			err
		});

		throw new Error(err);
	}
});



module.exports = router;