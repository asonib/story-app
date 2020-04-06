const express = require('express');
const router = express.Router();

const deleteRoute = require('../controllers/delete');

router.delete('/delete/:id', deleteRoute.deleteData);

module.exports = router;