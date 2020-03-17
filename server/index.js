const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, './../public')));

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(PORT, (err) => {
  console.log('listening on port: ', PORT);
});
