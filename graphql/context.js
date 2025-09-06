const { verifyToken } = require('../service/authService');

module.exports = ({ req }) => {
  const auth = req.headers.authorization || '';
  if (auth.startsWith('Bearer ')) {
    const token = auth.replace('Bearer ', '');
    const user = verifyToken(token);
    if (user) return { user };
  }
  return {};
};
