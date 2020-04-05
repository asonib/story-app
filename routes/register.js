const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Register')
const Register = mongoose.model('register');

const registerRoute = require('../controllers/register');

router.get('/register', registerRoute.addRegister);
router.post('/register', (req, res) => {
    console.log(req.body);
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const newData = new Register(newUser);
    newData.save()
    .then(() => {
        res.render('login', {
            title: 'Login'
        });
    });
});

module.exports = router;