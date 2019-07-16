
const express = require("express");
const router = express.Router();
const users = require("../helpers/userModel");
const listings = require("../helpers/joblistingModel")
const  {authenticate} = require("../../auth/restricted-middleware");

router.get("/", authenticate, async (req, res) => {
    try {
     const user = await users.getUsers()
     res.status(200).json(user)
    } catch (error) {
      res.status(404).json({ message: "Users could not be found" });
    }
  });

router.get("/:id", authenticate, async (req, res) => {
  try {
    const user = await users.getById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the user"
    });
  }
});

router.post("/listing", authenticate, async (req,res) => { 
    
  try{
    
     const listing = await listings.insert(req.body)
     res.status(201).json(listing);
    
  }catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: "Error adding the job"
    });
  }
});

router.put("/listing/:id", authenticate, async (req, res) => {
  const changes = req.body;
  try {
      const listing = await listings.update(req.params.id, changes);

      if(listing) {
        res.status(201).json(listing)
      } else {
        res.status(401).json("Could not update job listing.")
      }
    } catch(error) {
    res.status(404).json(error);
  }
});

router.delete("/listing/:id", authenticate, async (req, res) => {
  try {
      const count = await listings.remove(req.params.id);

      if(count > 0) {
        res.status(201).json("Job listing has been removed.")
      } else {
        res.status(404).json("Could not find posting to remove.")
      }
    } catch(error) {
    res.status(401).json("Could not remove posting.");
  }
});

router.get("/:id/listing", authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    const jobs = await users.getJoblistings(id);

    if (jobs.length) {
      res.json(jobs);
    } else {
      res.status(404).json({ err: "no listings for this user" });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;