const userService = require('../service/userService');
const transferService = require('../service/transferService');
const { generateToken } = require('../service/authService');

const resolvers = {
  Query: {
    users: () => userService.getUsers(),
    transfers: (parent, args, context) => {
      if (!context.user) throw new Error('Não autenticado');
      return transferService.getTransfers();
    },
  },
  Mutation: {
    register: (parent, { username, password, favorecidos }) => {
      return userService.registerUser({ username, password, favorecidos });
    },
    login: (parent, { username, password }) => {
      const user = userService.loginUser({ username, password });
      const token = generateToken({ username: user.username });
      return { user, token };
    },
    transfer: (parent, { from, to, amount }, context) => {
      if (!context.user) throw new Error('Não autenticado');
      return transferService.transfer({ from, to, amount });
    },
  },
};

module.exports = resolvers;
