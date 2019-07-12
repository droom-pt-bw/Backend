require("dotenv").config();

const env = process.env.DB_ENV || "development";
const config = require("../knexfile")[env];
// module.exports = knex(knexConfig.development);
module.exports = require("knex")(config);