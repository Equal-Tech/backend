const express = require('express');
const apiRoutes = require('./routes');

const app = express();
const port = 3000;

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Product API listening on http://localhost:${port}`);
});
