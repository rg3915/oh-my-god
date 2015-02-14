var mongoose = require('mongoose')

, Schema = mongoose.Schema

,	user = {
		"f_name": {type: String, required: true},
		"l_name": {type: String, required: true},
		"email": {type: String, required: true},
		"gender": {type: String, required: true},
		"password":{type: String, required: true},
		"currency": []
	}

,	currency = {
		"name": {type: String, required: true},
		"owner": {type: String, required: true},
		"get_amount": {type: String, required: true},
		"current_amount": {type: Number, required: true},
		"get_amount": {type: Number, min: 0.01, required: false},
		"set_amount": {type: Number, min: 0.01, required: false}
	}

,	userSchema = new Schema(user)
, 	currencySchema = new Schema(currency);

userSchema.currency = currencySchema;
console.log(userSchema);

module.exports = mongoose.model('User', userSchema, 'user');