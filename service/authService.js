const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'segredo_super_simples';

function generateToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
