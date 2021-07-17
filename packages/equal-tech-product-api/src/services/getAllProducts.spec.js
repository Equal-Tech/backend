const getAllProducts = require('./getAllProducts');

jest.mock('../../data/products.json', () => []);

describe('getAllProducts', () => {
  it('returns all products', () => {
    expect(getAllProducts()).toStrictEqual([]);
  })
})