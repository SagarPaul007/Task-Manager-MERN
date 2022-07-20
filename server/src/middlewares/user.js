const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

const validateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next();
  const token = authHeader?.split(" ")[1];
  if (!token) return next();
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return next();
    req.user = decoded;
    next();
  });
};

module.exports = { validateUser };
