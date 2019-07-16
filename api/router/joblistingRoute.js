
const express = require("express");
const router = express.Router();
const listings = require("../helpers/joblistingModel");
const  {authenticate} = require("../../auth/restricted-middleware");

router.get("/", authenticate, async (req, res) => {
    try {
     const listing = await listings.findJobs()
     res.status(200).json(listing)
    } catch (error) {
      res.status(404).json({ message: "Joblisting could not be found" });
    }
  });
  module.exports = router;