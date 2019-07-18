const router = require('express').Router();
const Matched = require("../../api/helpers/getMatchesModel");

router.get('/seeker/:id', async (req, res) => {
	try {
		const matched = await Matched.getMatchedJobs(req.params.id);
		res.status(200).json(matched);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, there was an error getting the matches.',
			err
		});
		throw new Error(err);
	}
});

router.get('/job/:id', async (req, res) => {
	try {
		const matched = await Matched.getMatchedSeekers(req.params.id);
		res.status(200).json(matched);
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, there was an error getting the matches.',
			err
		});
		throw new Error(err);
	}
});

module.exports = router;