const express = require('express');
const router = express.Router();

const loginRoute = require('../controllers/login');

router.post('/login', loginRoute.addLogin);

module.exports = router;