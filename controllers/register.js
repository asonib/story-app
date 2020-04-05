const mongoose = require('mongoose');
require('../models/Register')
const Register = mongoose.model('register');

exports.addRegister = (req, res) => {
    res.render('register', {
        'title': 'Register | Welcome!'
    });
}

exports.postRegister = (req, res) => {
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
}