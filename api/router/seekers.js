const express = require("express");
const router = express.Router();
const seekers = require("../../api/helpers/seekerModel")



router.post('/', async (req, res) => {
    const {name, location, skills, description, user_id} = req.body
    if(!name || !location || !skills || !description|| !user_id){
        res
      .status(400)
      .json({ message: "Please ensure name, location, skills and description are entered." });
	}
	
	try {
		const profile = await seekers.add(req.body);
		res.status(201).json(profile);
	} catch (err) {
		res.status(500).json({
			message:
				'Something went wrong posting data'
		});
		console.log(err);
		throw new Error(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const profile = await seekers.findById(req.params.id);

		if (!profile)
			return res.status(404).json({
				message: "Sorry, but that profile doesn't exist"
			});

		res.status(200).json(profile);
	} catch (err) {
		res.status(500).json({
			message:
			'Something went wrong fetching data '
		});

	}
});

router.put('/:id', async (req, res) => {
    const {name, location, skills, description, user_id} = req.body
    if(!name || !location || !skills || !description|| !user_id){
        res
      .status(400)
      .json({ message: "Please ensure name, location, skills and description are entered." });
	}
	try {
		const profile = await seekers.findById(req.params.id);

		if (!profile)
			return res.status(404).json({
				message: "Profile doesn't exist"
			});

		const updatedProfile = await seekers.update(
			req.params.id,
			req.body
		);

		res.status(200).json(updatedProfile);
	} catch (err) {
		res.status(500).json({
			message:
				' Something went wrong while updating'
		});
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const profile = await seekers.findById(req.params.id);

		if (!profile)
			return res.status(404).json({
				message: "That seeker is not in the Database"
			});

		await seekers.remove(req.params.id);
		res.status(200).json({
			message: 'Seeker has been nuked'
		});
	} catch (err) {
		res.status(500).json({
			message:
				'Sorry, but something went wrong while deleting that profile'
		});
	}
});


module.exports = router;