const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

mongoose.connect('mongodb://localhost/story', {
        useMongoClient: true
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.log('Error conneting to mongoDB server');
    });

module.exports = router;