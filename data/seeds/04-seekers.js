
exports.seed = async function(knex) {
  
  // Inserts seed entries
  await knex("seekers").insert([
    { 
      id: 1,
      name:"John Everyboy",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills:"React.js, JavaScript, HTML, CSS, SQL ",
      location:"Houston, TX",
      user_id:1
    },
    {
      id: 2,
      name:"Mike N Nike",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      skills:"React.js, JavaScript, HTML, CSS, SQL ",
      location:"Temecula, CA",
      user_id:3
    }
  ]);
};
