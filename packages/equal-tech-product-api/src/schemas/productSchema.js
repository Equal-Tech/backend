const productSchema = `
  type Product {
    id: Int
    name: String!
    image: Image
    price: Float
    rating: Rating
    colours: [String!]!
    sizes: [String!]!
  }
`;

module.exports = productSchema;
