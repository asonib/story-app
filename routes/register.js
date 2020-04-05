const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const registerRoute = require('../controllers/register');

router.get('/register', registerRoute.addRegister);
router.post('/register', registerRoute.postRegister);

module.exports = router;