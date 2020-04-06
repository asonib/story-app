const express = require('express');
const router = express.Router();

const displayRoute = require('../controllers/display');
router.get('/users', displayRoute.displayData);

module.exports = router;