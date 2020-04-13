const mongoose = require('mongoose');

require('../models/Register');
const Register = mongoose.model('register');

exports.displayData = (req, res) => {
    Register.find()
    .then((users) => {
        res.render('display', {
            users: users,
            title: 'Display Users'
        });
    })
    .catch((err) => {
        consloe.log('Cannot fetch Data'+err);
    })
}