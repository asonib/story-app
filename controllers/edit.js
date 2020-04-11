const mongoose = require('mongoose');

require('../models/Register');
const Register = mongoose.model('register');

exports.EditData = (req, res) => {
    Register.findById({
            _id: req.params.id
        })
        .then((singleUser) => {
            res.render('edit', {
                result: singleUser,
                title: 'Edit'
            });
        })
        .catch((err) => {
            console.log('Cannot Fetch');
        });
}