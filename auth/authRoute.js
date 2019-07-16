const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/secrets");
const db = require("../data/dbConfig");

module.exports = server => {
  server.post("/login", login);
  server.post("/register", register);
};

function generateToken(user) {
  return jwt.sign(
    {
      userId: user.id
    },
    jwtSecret,
    {
      expiresIn: "1d"
    }
  );
}

function login(req, res) {
  const creds = req.body;
  const {id, username} = req.body;
  db("users")
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        const isCompany = Boolean(user.isCompany);
        res.status(200).json({ message: "Welcome!", id, username, token, isCompany });
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
