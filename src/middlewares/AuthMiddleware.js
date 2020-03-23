const jwt = require('jsonwebtoken');
const AuthService = require('../services/AuthService');
const config = require('../config/auth');

const authorize = (req, res, next) => {
  const token = req.body.token || req.query.token || req.header['x-acess-token'];

  if (!token) {
    return res.status(401).json({ error: 'Acess denied' });
  }

  jwt.verify(token, config.jwt_salt, (error, decoded) => {
    if (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
    next();
  });
};

module.exports = authorize;
