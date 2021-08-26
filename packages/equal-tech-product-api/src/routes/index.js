const express = require('express');
const routesV1 = require('./v1');
const routesV2 = require('./v2');

const router = express.Router();

router.use('/v1', routesV1);
router.use('/v2', routesV2);

module.exports = router;
