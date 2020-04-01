const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.render('login', {
        'title': 'Login | Welcome!'
    });
});

module.exports = router;