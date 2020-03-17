const path = require('path');
const mongoose = require('mongoose');
const Room = require('./Room.js');

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

const sampleRooms = [];
let lastVerified = true;
let lastPic = 0;
for (let i = 0; i < 100; i += 1) {
  const sampleRoom = {
    roomId: i,
    pictures: [],
  };
  const samplePics = [];
  for (let j = 0; j < 7 + Math.floor(Math.random() * 10); j += 1) {
    const samplePic = {
      imageUrl: path.resolve(__dirname, `../assets/picture${lastPic}.jpg`),
      description: `fake image description for room ${i}, picture ${j}`,
      verified: lastVerified,
    };
    lastVerified = !lastVerified;
    lastPic += 1;
    samplePics.push(samplePic);
  }
  sampleRoom.pictures = samplePics;
  const currentRoom = new Room(sampleRoom);
  sampleRooms.push(currentRoom);
}

Room.deleteMany({})
  .then(() => (Room.create(sampleRooms)))
  .then(() => {
    console.log('successfully seeded database');
  })
  .then(mongoose.disconnect)
  .catch((err) => console.log('error in seeding: ', err));
