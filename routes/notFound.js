const express = require('express');
const router = express.Router();

const notFoundRoute = require('../controllers/notFound');

router.get('', notFoundRoute.notFound);

module.exports = router;