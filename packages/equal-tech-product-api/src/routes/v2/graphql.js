const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const rootSchema = require('../../schemas');
const { getAllProducts, getOneProduct } = require('../../services');

const schema = buildSchema(rootSchema);

const rootValue = {
  products: getAllProducts,
  product: ({ id }) => getOneProduct(id)
}

const graphqlHandler = graphqlHTTP({
  schema,
  rootValue,
  graphiql: process.env.NODE_ENV === 'development',
});

module.exports = graphqlHandler;
