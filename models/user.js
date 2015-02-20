var mongoose = require('mongoose')

, Schema = mongoose.Schema

,	user = {
		"f_name": {type: String, required: true},
		"l_name": {type: String, required: true},
		"email": {type: String, required: true},
		"gender": {type: String, required: true},
		"password":{type: String, required: true},
	}

, currency = {
				"name": {type: String, required: true},
				"current_amount": {type: Number, required: false, default: 0},
				"date_get_salary": {type: Date, default: Date.now}
			}

user.currency = currency;

var userSchema = new Schema(user);

//console.log(userSchema);


module.exports = mongoose.model('User', userSchema, 'user');