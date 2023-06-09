const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        bookId: ID!
        title: String!
        authors: [String]
        description: String
        image: String
        link: String
    }

    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    input BookInfo {
        description: String!
        title: String! 
        author: [String]!
        bookId: ID 
        link: String 
        image: String
    }

    type Auth {
        token: ID!
        user: User
      }

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(bookData: BookInfo): User
        removeBook(bookId: ID): User
        }
`;

module.exports = typeDefs;