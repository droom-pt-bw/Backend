
const express = require("express");
const router = express.Router();
const users = require("../helpers/userModel");
const  {authenticate} = require("../../auth/restricted-middleware");

router.get("/", authenticate, async (req, res) => {
    try {
     const user = await users.getUsers()
     res.status(200).json(user)
    } catch (error) {
      res.status(404).json({ message: "Users could not be found" });
    }
  });
  module.exports = router;