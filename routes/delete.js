const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/Register');
const Register = mongoose.model('register');

router.delete('/delete/:id', (req, res) => {
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
});

module.exports = router;