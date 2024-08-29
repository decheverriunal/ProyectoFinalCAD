import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import testData from "./testData.js";

function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const resolvers = {
    Query: {
        getUser(_, args) {
            return testData.usersProfiles.find((user) => user.id === args.id)
        },
        getRequest(_, args) {
            return testData.requests.find((r) => r.id === args.id)
        },
        getUserElements() {
            return testData.usersElementsForQuotations
        },
        getRequests() {
            return testData.requests
        },
        getOrder(_, args) {
            return testData.orders.find((order) => order.id === args.id)
        },
        getOrders() {
            return testData.orders
        },
    },
    USERS_PROFILE: {
        userElements(parent){
            return testData.usersElementsForQuotations.filter((elem) => elem.idUser === parent.id)
        },
        requests(parent){
            return testData.requests.filter((elem) => elem.idUser === parent.id)
        }
        
    },
    USERS_ELEMENTS_FOR_QUOTATION: {
        user(parent){
            return testData.usersProfiles.find((elem) => elem.id === parent.idUser)
        }
    },
    REQUEST: {
        request_status(parent){
            return testData.requestTypes.find((elem) => elem.id === parent.request_status)
        },
        user(parent){
            return testData.usersProfiles.find((elem) => elem.id === parent.idUser)
        }
    },
    Mutation: {
        deleteUser(_, args) {
            testData.usersProfiles = testData.usersProfiles.filter((user) => user.id !== args.id)
            return "done"
        },
        addUser(_, args) {
            let user = {
                ...args.user,
                id: randomString(16)
            }
            testData.usersProfiles.push(user)
            return user
        },
        addUserElement(_, args) {
            let userElement = {
                ...args.userElement,
                id: randomString(16)
            }
            testData.usersElementsForQuotations.push(userElement)
            return userElement
        },
        addOrder(_, args) {
            let order = {
                ...args.order,
                id: randomString(16)
            }
            testData.orders.push(order)
            return order
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`  Server ready at: ${url}`);