
const express = require("express");
const router = express.Router();
const jobListing = require("../helpers/joblistingModel");


router.get("/", async (req, res) => {
    try {
     const listing = await jobListing.findJobs()
     res.status(200).json(listing)
    } catch (error) {
      res.status(404).json({ message: "Joblisting could not be found" });
    }
  });
  module.exports = router;