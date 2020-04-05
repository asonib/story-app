const express = require('express');
const router = express.Router();

const registerRoute = require('../controllers/register');

router.post('/register', registerRoute.addRegister);

module.exports = router;