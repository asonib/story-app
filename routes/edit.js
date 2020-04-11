const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/Register');
const Register = mongoose.model('register');

const EditRoute = require('../controllers/edit');

router.get('/edit/:id', EditRoute.editGet);

router.put('/edit/:id', EditRoute.editPut);

module.exports = router;