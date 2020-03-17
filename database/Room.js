const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomId: Number,
  pictures: [{ imageUrl: String, description: String, verified: Boolean }],
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
