const express = require('express');
const getAllProducts = require('../../services/getAllProducts');

const router = express.Router();

router.get('/', (req, res) =>
  res.send(getAllProducts())
);

module.exports = router;