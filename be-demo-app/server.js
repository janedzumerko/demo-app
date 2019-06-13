const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const config = require('./db');
const users = require('./routes/user');
const setPassportStrategies = require('./passport');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
	() => {
		console.log('Database connected');
	},
	err => {
		console.log('Can not connect to Database ', err);
	}
);

const app = express();

app.use(cors());
app.use(passport.initialize());
setPassportStrategies(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users', users);

app.get('/', function(req, res, next) {
	res.send('hello');
});

app.listen(8080, function() {
	console.log('CORS-enabled web server listening on port 80');
});
