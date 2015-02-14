var mongoose = require('mongoose');

module.exports = function(databaseURI){
	mongoose.connect(databaseURI);

	mongoose.connection.on('open', function(){
		console.log('Conexão aberta em ' + databaseURI);
	})

	mongoose.connection.on('error', function(err){
		console.log(err)
	});
}