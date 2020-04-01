const express = require('express');
const path = require('path');

const loginRoute = require('./routes/login');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/home', (req, res) => {
    res.render('home', {
        'title': 'Welcome To Story Books',
        'body': 'Get Ready To Write!'
    });
});

app.use(loginRoute);

app.use('', (req, res) => {
    res.render('notFound', {
        'title': 'Page Not Found',
        'body': '404 Error'
    });
});


port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${[port]}`);
});