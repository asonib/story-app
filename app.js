const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// const configData = require('./config/config');
// const password = configData.configFile.password;

const registerRoute = require('./routes/register');
const notFoundRoute = require('./routes/notFound');
const homeRoute = require('./routes/home');
const displayRoute = require('./routes/display');
const editRoute = require('./routes/edit');
const deleteRoute = require('./routes/delete');
const loginRoute = require('./routes/login');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost/story', {
        useMongoClient: true
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.log('Error conneting to mongoDB server');
    });

app.use(registerRoute);
app.use(notFoundRoute);
app.use(homeRoute);
app.use(displayRoute);
app.use(editRoute);
app.use(deleteRoute);
app.use(loginRoute);

port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});