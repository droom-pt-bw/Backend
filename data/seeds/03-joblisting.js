
exports.seed = async function(knex) {
  
  // Inserts seed entries
  await knex('joblisting').insert([
    { 
      id: 1, 
      company: 'Lawn Love Lawn Care', 
      location:'San Diego, California',
      salary:"70,000",
      jobtitle:"Full-Stack Software Engineer",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company_id:1
    },
    { 
      id: 2, 
      company: 'Amobee', 
      location:'Houston, Texas',
      salary:"50,000",
      jobtitle:"Junior Front End Developer",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company_id:1
    },
    { 
      id: 3, 
      company: 'Mikes', 
      location:'New Yorks, New York',
      salary:"90,000",
      jobtitle:"Backend End Developer",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      company_id:1
    }
  ]);
};
