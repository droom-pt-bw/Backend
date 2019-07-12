const PORT = process.env.PORT || 5000;

const jwtSecret =
  process.env.JWT_SECRET ||
  "something";

module.exports = {
    PORT,
    jwtSecret
  };