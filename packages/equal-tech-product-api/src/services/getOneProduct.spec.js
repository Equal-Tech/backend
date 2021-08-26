const getOneProduct = require('./getOneProduct');

jest.mock('../../data/products.json', () => [
  {
    id: 1,
    name: "Product 1"
  },
  {
    id: 2,
    name: "Product 2"
  }
]);

describe('getOneProduct', () => {
  it('returns the correct product', () => {
    const result = getOneProduct(2);
    expect(result).toStrictEqual({
      id: 2,
      name: "Product 2"
    });
  });

  it('returns an empty object if the product id is not found', () => {
    const result = getOneProduct(9001);
    expect(result).toStrictEqual({});
  });
});
