const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/Register');
const Register = mongoose.model('register');

const EditRoute = require('../controllers/edit');

router.get('/edit/:id', EditRoute.EditData);

router.put('/edit/:id', (req, res) => {
    Register.findOne({
            _id: req.params.id
        })
        .then((result) => {
            result.name = req.body.name;
            result.email = req.body.email;
            result.password = req.body.password;
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

module.exports = router;