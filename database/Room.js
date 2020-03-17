const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomId: Number,
  pictures: Array,
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
