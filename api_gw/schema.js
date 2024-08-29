export const typeDefs = `#graphql
    type USERS_PROFILE {
        id:ID!
        names: String!
        lastNames: String!
        alias: String!
        password: String!
        eMail: String!
        phoneNumber: String!
        country: String!
        userElements: [USERS_ELEMENTS_FOR_QUOTATION!]
        requests: [REQUEST!]
    }
    type USERS_ELEMENTS_FOR_QUOTATION {
        id: ID!
        IAM_URL: String!
        PDF_URL: String!
        QUOTE_PDF_URL: String!
        user: USERS_PROFILE!
    }
    type REQUEST {
        id: ID!
        request_status: REQUEST_TYPES!
        user: USERS_PROFILE!
    }

    type REQUEST_TYPES {
        id: ID!
        Status: String!
    }

    type Order {
        id: ID!
        user_email: String!
        diameter: Float!
        length: Float!
        thickness: Float!
        state: String!
    }

    type Query {
        getUser(id: ID!): USERS_PROFILE
        getRequest(id: ID!): REQUEST
        getUserElements: [USERS_ELEMENTS_FOR_QUOTATION]
        getRequests: [REQUEST]
        getOrder(id: ID!): Order
        getOrders: [Order]
    }

    type Mutation {
        deleteUser(id: ID!): String
        addUser(user: addUserInput!): USERS_PROFILE
        addUserElement(userElement: addUserElementInput!): USERS_ELEMENTS_FOR_QUOTATION
        addOrder(order: addOrderInput!): Order
    }

    input addUserInput {
        names: String!
        lastNames: String!
        alias: String!
        password: String!
        eMail: String!
        phoneNumber: String!
        country: String!
    }

    input addUserElementInput {
        IAM_URL: String!
        PDF_URL: String!
        QUOTE_PDF_URL: String!
    }

    input addOrderInput {
        user_email: String!
        diameter: Float!
        length: Float!
        thickness: Float!
        state: String!
    }
`

