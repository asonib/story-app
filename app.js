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


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));


app.use(registerRoute);
app.use(notFoundRoute);
app.use(homeRoute);


port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});