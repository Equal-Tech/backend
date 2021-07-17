const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log(`Product API listening on http://localhost:${port}`);
});
