const gql = String.raw;

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        username: String
        createdAt: String
        updatedAt: String
        userCollection: [UserCollection]
    }

    type Whiskey {
        _id: ID
        name: String
        img: String
        type: String
        distiller: String
        country: String
        region: String
        bottler: String
        abv: Float
        age: String
        price: Float
        notes: WhiskeyNotes
        score: Float
    }

    type UserCollection {
        _id: ID
        userId: ID
        whiskeyId: Whiskey
        rating: Float
        userNotes: WhiskeyNotes
    }

    type WhiskeyNotes {
        nose: String
        taste: String
        finish: String
    }

    type Query {
        authenticate: User
        getUserById(userId: ID!): User
        whiskeys(search: String): [Whiskey]
    }

    type Mutation {
        register(email: String!, username: String!, password: String!): User
        login(identifier: String!, password: String!): User
        logout: String
        addToCollection(userId: ID!, whiskeyId: ID!, rating: Float, userNotes: WhiskeyNotesInput): UserCollection
        updateReview(userId: ID!, whiskeyId: ID!, rating: Float, userNotes: WhiskeyNotesInput): UserCollection
        removeFromCollection(userId: ID!, whiskeyId: ID!): UserCollection
    }

    input WhiskeyNotesInput {
        nose: String
        taste: String
        finish: String
    }
`
module.exports = typeDefs;