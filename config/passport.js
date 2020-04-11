const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

require('../models/Register');
Register = mongoose.model('register');

module.exports = (passport) => {
    passport.use(new LocalStrategy({usernameField: 'email'}, 
        (email, password, done) => {
            Register.findOne({
                email: email
            })
            .then((user) => {
                if(!user){
                    console.log('No User');
                    return done(null, false, {message: 'No User Found'});
                }
                if(user.password == password){
                    console.log('Correct Password');
                    return done(null, user, {message: 'Logged In'});
                }else{
                    console.log('Incorrect Password');
                    return done(null, false, {message: 'Incorrect Password'});
                }
            })
            .catch((err) => {
                console.log('Error Fetching User');
            });
        }));
}