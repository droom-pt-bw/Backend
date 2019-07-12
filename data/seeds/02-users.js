
exports.seed = async function(knex) {
  
  // Inserts seed entries
  await knex('users').insert([
    {
      id: 1,
      username: "John",
      password: "password",
      email:"something@something.com",
      isCompany: false,
    },
    {
      id: 2,
      username: "Mind Corp",
      password: "password",
      email:"somethingelse@something.com",
      isCompany: true,
    },
    {
      id: 3,
      username: "Mike",
      password: "password",
      email:"somethingelseelse@something.com",
      isCompany: false,
    },
  ]);
};
