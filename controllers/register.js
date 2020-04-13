const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../models/Register')
const Register = mongoose.model('register');

exports.addRegister = (req, res) => {
    res.render('register', {
        'title': 'Register | Welcome!',
        'method': 'GET',
        'email': null,
        'name': null,
        'password': null,
        'confirm': null
    });
}

exports.postRegister = (req, res) => {
    console.log(req.body);
    const errors = [];
    if(!req.body.name){
        errors.push({text: 'Please Enter Name'});
    }
    if(!req.body.email){
        errors.push({text: 'Please Enter Email'});
    }
    if(!req.body.password){
        errors.push({text: 'Please Enter Password'});
    }
    if(!req.body.confirm){
        errors.push({text: 'Please confirm your password'});
    }
    if(errors.length > 0){
        res.render('register', {
            title: 'Register',
            error: errors,
            name: req.body.name,
            email: req.body.email,
            method: 'POST'
        });
    }else{
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                newUser.password = hash;
                const newData = new Register(newUser);
                newData.save()
                .then(() => {
                    res.render('login', {
                        title: 'Login'
                    });
                })
                .catch((err) => {
                    console.log('Error in Encryption process');
                })
            });
        });
        
    
    }
}