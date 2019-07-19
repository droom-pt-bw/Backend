const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const jobListing = require("../api/router/joblistingRoute");
const seekers = require("../api/router/seekers");
const companies = require("../api/router/companyRoute");
const match = require("../api/router/matchRouter")
const matched = require("../api/router/getMatchesRouter")
const users = require("../api/router/userRoutes");
const authRoutes = require("../auth/authRoute");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
authRoutes(server);
server.use("/listings", jobListing);
server.use("/users", users);
server.use("/companies", companies);
server.use("/matched/matched", matched)
server.use("/seekers", seekers);
server.use("/match", match)



server.get('/', (req, res) => {
  res.status(200).json({message: "It's alive!"})
});

module.exports = server;