const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
