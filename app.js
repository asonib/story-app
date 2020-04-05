const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const registerRoute = require('./routes/register');
const notFoundRoute = require('./routes/notFound');
const homeRoute = require('./routes/home');

const app = express();
mongoose.connect('mongodb://localhost/storyapp', {
    useMongoClient: true
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.log('Error conneting to mongoDB server');
});
require('./models/Register');
const Register = mongoose.model('register');


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));


app.use(registerRoute);
app.use(notFoundRoute);
app.use(homeRoute);

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});
app.post('/login', (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    new Register=(newUser)
    .save()
    .then(register => {
        res.redirect('/login');
    })
});


port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});