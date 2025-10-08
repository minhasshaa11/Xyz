const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! My test deployment is working!');
});

app.listen(port, () => {
  console.log(`Test app listening on port ${port}`);
});
