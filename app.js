var app = require('./config/express')
,	db  =  require('./config/db')('mongodb://localhost/omg')
, 	http = require('http').Server(app);

app.listen(3000, function(){
	console.log('Servidor certo');
});