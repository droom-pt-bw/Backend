const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require("../config/secrets")
const db = require("../data/dbConfig")




module.exports = server => {
    server.post("/login", login);
    
  };


function login(req, res) {
	const creds = req.body;
	db('users')
		.where({ username: creds.username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(creds.password, user.password)) {
                const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' });
				res.status(200).json({ message: 'Welcome!', token });
			} else {
				res.status(401).json({ message: 'NO NO NO' });
			}
		})
		.catch((err) => res.status(400).json(err));
}