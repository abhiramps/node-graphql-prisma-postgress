import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from './graphql/schema/index.js'
import resolvers from './graphql/resolvers/index.js';

const server = new ApolloServer({
    typeDefs:schema,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
});
  
console.log(`🚀  Server ready at: ${url}`);