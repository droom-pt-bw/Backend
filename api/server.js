const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const jobListing = require("../api/router/joblistingRoute");
const users = require("../api/router/userRoutes");
const authRoutes = require("../auth/authRoute");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
authRoutes(server);
server.use("/listings", jobListing);
server.use("/users", users);



server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;