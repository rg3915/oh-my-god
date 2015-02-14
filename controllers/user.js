var User = require('../models/user');

module.exports = {
	create: function(req, res, next){
		
		var data = req.body;

		var collection = new User(data);

		collection.save(function(err, data){
			console.log(!err ? "CREATE SUCCESS: " + data : err);
		});

		res.render('users/create');
	},

	retrive: function(req, res, next){
		res.render('users/retrive');
	}
}