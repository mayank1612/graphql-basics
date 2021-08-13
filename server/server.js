const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => {
      return "Hello graphql world!";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 9000 }).then((ServerInfo) => {
  return console.log(`server is running on ${ServerInfo.url}`);
});
