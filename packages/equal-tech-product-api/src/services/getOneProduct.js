const products = require('../../data/products.json');

const getOneProduct = (productId) =>
  products.find((product) => product.id === productId) || {};

module.exports = getOneProduct;
