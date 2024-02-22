const gql = String.raw;

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        username: String
        createdAt: String
        updatedAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        authenticate: User
        getUserById(userId: ID!): User
    }

    type Mutation {
        register(email: String!, username: String!, password: String!): Auth
        login(identifier: String!, password: String!): Auth
        logout: String
    }
`
module.exports = typeDefs;