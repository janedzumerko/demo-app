const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		requried: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
