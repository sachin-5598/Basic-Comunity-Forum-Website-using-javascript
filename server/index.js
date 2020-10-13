const app = require('./src/app');

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
