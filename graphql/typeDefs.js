const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    favorecidos: [String]
  }

  type Transfer {
    from: String!
    to: String!
    amount: Float!
    date: String!
  }

  type AuthPayload {
    user: User!
    token: String!
  }

  type Query {
    users: [User!]!
    transfers: [Transfer!]!
  }

  type Mutation {
    register(username: String!, password: String!, favorecidos: [String]): User!
    login(username: String!, password: String!): AuthPayload!
    transfer(from: String!, to: String!, amount: Float!): Transfer!
  }
`;

module.exports = typeDefs;
