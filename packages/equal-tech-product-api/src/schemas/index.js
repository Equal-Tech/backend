const imageSchema = require('./imageSchema');
const ratingSchema = require('./ratingSchema');
const productSchema = require('./productSchema');

const rootSchema = `
  ${imageSchema}
  ${ratingSchema}
  ${productSchema}
  
  type Query {
    products: [Product]
    product(id: Int): Product
  }
`;

module.exports = rootSchema;