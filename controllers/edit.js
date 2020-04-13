const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../models/Register');
const Register = mongoose.model('register');

exports.editGet = (req, res) => {
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

exports.editPut = (req, res) => {
    Register.findOne({
            _id: req.params.id
        })
        .then((result) => {
            result.name = req.body.name;
            result.email = req.body.email;

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    result.password = hash;
                    result.save()
                    .then(() => {
                        console.log('Updated Successfully');
                        Register.find()
                            .then((result) => {
                                res.render('display', {
                                    users: result,
                                    title: 'Display Data'
                                });
                            });
                    })
                    .catch((err) => {
                        console.log('Error Updating');
                    });
                });
            });
        });
}