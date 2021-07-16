const express = require('express');

const router = express.Router();

router.get('/:productId', (req, res) => res.send(req.params.productId));

module.exports = router;