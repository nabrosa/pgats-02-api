const userService = require('../service/userService');

exports.register = (req, res) => {
  try {
    const user = userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ error: 'Informe login e senha' });
    }
    const user = userService.loginUser(req.body);
    const { generateToken } = require('../service/authService');
    const token = generateToken({ username: user.username });
    res.json({ user, token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.getUsers = (req, res) => {
  res.json(userService.getUsers());
};
