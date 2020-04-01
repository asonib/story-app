const express = require('express');
const router = express.Router();

const homeRoute = require('../controllers/home');

router.get('/home', homeRoute.homePage);

module.exports = router;