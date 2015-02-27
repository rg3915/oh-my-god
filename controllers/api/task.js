var Task = require('../../models/task');

module.exports = {

	create: function(req, res, cb){

		var _task = req.body;

		var model = new Task(_task);

		model.save(function(e, d){

			cb(e, d, res);

		});
	},

	retrive: function(req, res, cb){

		Task.find({}).exec(function(e, d){
			cb(e, d, res);
		});
	},

	retriveById: function(req, res, cb){

		var query = {_id: req.params.id};

		Task.findOne(query, function(e, d){

			cb(e, d, res);

		});
	},

	update: function(req, res, cb){

		var query = {_id: req.params.id};

		var mod = req.body;

		Task.update(query, mod, function(e, d){

			cb(e, d, res);
		});
	},

	delete: function(req, res, cb){

		var query = {_id: req.params.id};

		Task.remove(query, function(e, d){

			cb(e, d, res);
			
		});
	}
}