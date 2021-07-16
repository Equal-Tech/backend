const express = require('express');
const getOneProduct = require('../../services/getOneProduct');

const router = express.Router();

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  const product = getOneProduct(Number.parseInt(productId));
  if (!product) {
    return res.status(404).send({ message: 'Not found' });
  }

  res.send(product);
});

module.exports = router;
