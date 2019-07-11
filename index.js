require("dotenv").config();

const {PORT} = require("./config/secrets.js")
const server = require('./api/server.js');


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${PORT} **\n`));
