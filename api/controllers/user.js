var User = require('../../models/user');

module.exports = {
	create: function(req, res, path_render, cb){

		var model = new User(req.body);

		model.save(function(err, data){
			
			

		});

		res.redirect('/');
	},

	retrive: function(req, res, path_render, cb){

		var id = req.params.id;

		User.find({}, function(err, data){

			cb(err, data, res, path_render);

		});
	},

	retriveById: function(req, res, path_render, cb){

		var query = {_id: req.params.id};

		User.findOne(query, function(err, data){

			cb(err, data, res, path_render);

		});
	},

	update: function(req, res, path_render, cb){
		var id = req.params.id;
		var query = {_id: id};
		var mod = req.body;
		delete mod._id;

		User.update(query, mod, function(err, data){
			res.redirect('/');
		});
	},

	delete: function(req, res, path_render, cb){
		var id = req.params.id;
		var query = {_id: id};
		User.remove(query, function(err, data){
			res.redirect('/');
		});
	}
}