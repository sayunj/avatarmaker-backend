import {GraphQLServer} from "graphql-yoga"
import resolvers from "./graphql/resolvers";

const opts = {
    port: 5000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
})

server.start(opts, () => {
    console.log(
      `Server running at http://localhost:${opts.port}${opts.endpoint}`
    );
});