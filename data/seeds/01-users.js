const { jwtSecret } = require("../../config/secrets")
const bcrypt = require("bcryptjs");

function hashPassword(str) {
  return bcrypt.hashSync(str, 10);
}


exports.seed = async function(knex) {
  await knex('users').insert([
    {
      id: 1,
      username: "John",
      password: hashPassword(jwtSecret),
      email:"something@something.com",
      isCompany: false,
    },
    {
      id: 2,
      username: "Mind-Corp",
      password: hashPassword(jwtSecret),
      email:"somethingelse@something.com",
      isCompany: true,
    },
    {
      id: 3,
      username: "Mike",
      password: hashPassword(jwtSecret),
      email:"somethingelseelse@something.com",
      isCompany: false,
    },
  ]);
};
