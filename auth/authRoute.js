const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");
const db = require("../data/dbConfig");
const user = require("../api/helpers/userModel");

module.exports = server => {
  server.post("/login", login);
  server.post("/register", register);
};

function login(req, res) {
  const creds = req.body;
  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: "1d" });
        const isCompany = Boolean(user.isCompany);
        res.status(200).json({ message: "Welcome!", token, isCompany });
      } else {
        res.status(401).json({ message: "NO NO NO" });
      }
    })
    .catch(err => res.status(400).json(err));
}

function register(req, res) {
  const creds = req.body;
  if (!creds.username || !creds.password || !creds.email || creds.isCompany) {
    res
      .status(400)
      .json({ message: "Please ensure required parameters are entered." });
  } else {
    const hash = bcrypt.hashSync(creds.password, 10);
    creds.password = hash;
    db("users")
      .insert(creds)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(err => res.status(400).json(err));
  }
}
