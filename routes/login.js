const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

module.exports = router;
