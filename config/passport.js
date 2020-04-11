const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

require('../models/Register');
Register = mongoose.model('register');

module.exports = (passport) => {
    passport.use(new LocalStrategy({usernameField: 'email'}, 
        (email, password, done) => {
            console.log(email);
        }))
}