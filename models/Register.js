const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    name: {
        title: String,
        required: true
    }
});

mongoose.model('register', RegisterSchema);