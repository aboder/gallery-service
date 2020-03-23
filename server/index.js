const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Room = require('../database/Room');

const app = express();
const PORT = 3000;

const mongoUri = 'mongodb://localhost/airtreentree';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    throw new Error('failed to connect to database');
  }
  console.log('connected to database');
});

app.use(express.static(path.resolve(__dirname, './../public')));

app.get('/api/gallery/pictures/:roomId', (req, res) => {
  Room.findOne({
    roomId: Number(req.params.roomId),
  }, (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
    res.send(data.pictures);
  });
});

app.listen(PORT, (err) => {
  console.log('listening on port: ', PORT);
});
