const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// const configData = require('./config/config');
// const password = configData.configFile.password;

const registerRoute = require('./routes/register');
const notFoundRoute = require('./routes/notFound');
const homeRoute = require('./routes/home');
const displayRoute = require('./routes/display');

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

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});

require('./models/Register');
const Register = mongoose.model('register');
app.get('/edit/:id', (req, res) => {
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
});

app.put('/edit/:id', (req, res) => {
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

app.delete('/delete/:id', (req, res) => {
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

port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});