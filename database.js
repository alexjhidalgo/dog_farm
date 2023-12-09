const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dog_breeding', { useNewUrlParser: true, useUnifiedTopology: true });

const DogSchema = new mongoose.Schema({
  breed: String,
  age: Number,
  healthStatus: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'BusinessUser' },
});

const BusinessUserSchema = new mongoose.Schema({
  username: String,
  password: String, // remember to hash passwords before storing
  email: String,
  type: String, // 'land', 'dogs', 'both'
  dogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog' }],
  location: String,
});

const ConsumerUserSchema = new mongoose.Schema({
  username: String,
  password: String, // remember to hash passwords before storing
  email: String,
  preferredBreed: String,
  location: String,
});

const Dog = mongoose.model('Dog', DogSchema);
const BusinessUser = mongoose.model('BusinessUser', BusinessUserSchema);
const ConsumerUser = mongoose.model('ConsumerUser', ConsumerUserSchema);