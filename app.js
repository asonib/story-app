const express = require('express');
const path = require('path');

const loginRoute = require('./routes/login');
const notFoundRoute = require('./routes/notFound');
const homeRoute = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(loginRoute);
app.use(notFoundRoute);
app.use(homeRoute);


port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});