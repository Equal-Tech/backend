const express = require('express');
const products = require('./products');
const product = require('./product');

const router = express.Router();

router.use('/products', products);
router.use('/product', product);

module.exports = router;
