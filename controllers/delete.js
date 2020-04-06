const mongoose = require('mongoose');

require('../models/Register');
const Register = mongoose.model('register');

exports.deleteData = (req, res) => {
    Register.findByIdAndDelete({
            _id: req.params.id
        })
        .then(() => {
            Register.find()
            .then((result) => {
                res.render('display', {
                    users: result,
                    title: 'Display Data'
                });
            });
        });
}