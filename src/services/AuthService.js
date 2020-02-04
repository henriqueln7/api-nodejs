const jwt = require('jsonwebtoken');

const generateToken = async (data) => jwt.sign(data, 'shhhh', {
  expiresIn: '1d',
});

const decodeToken = async (token) => jwt.verify(token, 'shhhh');

const authorize = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-acess-token'];

  if (!token) {
    return res.status(401).json({ error: 'Acess denied!' });
  }

  jwt.verify(token, 'shhhh', (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    return next();
  });
};

module.exports = {
  generateToken,
  decodeToken,
  authorize,
};
