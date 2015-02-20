var User = require('../../models/user');

var data = {};

module.exports = {

	create: function(req, res, cb){

		var user = {
				"f_name": "Guilherme",
				"l_name": "Paixão",
				"email": "guilhermee.paixaoo@googlemail.com",
				"gender": "M",
				"password":"eunaogostodecouve",
				"currency": {
					"name": "Real",
					"current_amount": 20000,
					"date_get_salary": Date.now()
				}

		}

		var model = new User(user);

		model.save(function(e, d){

			data.data = d;

			data.message = {
				success: 'Data created with success on: ' + Date.now(),
				error: e
			}

			cb(e, data, res);

		});
	},

	retrive: function(req, res, cb){

		User.find({}, function(e, d){

			data.data = d;

			data.message = {
				success: 'Data returned with success on: ' + Date.now(),
				error: e
			}

			cb(e, data, res);

		});
	},

	retriveById: function(req, res, cb){

		var query = {_id: req.params.id};

		User.findOne(query, function(e, d){

			data.data = d;

			data.message = {
				success: 'Data from ' + query._id + ' returned with success on' + Date.now(),
				error: e
			}

			cb(e, data, res);

		});
	},

	update: function(req, res, cb){

		var query = {_id: req.params.id};

		User.update(query, mod, function(e, d){

			data.data = d;

			data.message = {
				success: 'Data from ' + query._id + ' updated with success on: ' + Date.now(),
				error: e
			}

			cb(e, data, res);
		});
	},

	delete: function(req, res, cb){

		var query = {_id: req.params.id};


		User.remove(query, function(e, d){

			data.data = d;

			data.message = {
				success: 'Data from ' + query._id + ' deleted with success on: ' + Date.now(),
				error: e
			}

			cb(e, data, res);
			
		});
	}
}