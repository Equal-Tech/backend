const express = require('express');
const graphqlHandler = require('./graphql');

const router = express.Router();

router.use('/graphql', graphqlHandler);

module.exports = router;