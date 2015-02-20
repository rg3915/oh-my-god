var app = require('./config/express')
,	db  =  require('./config/db')('mongodb://127.0.0.1/omg')
, 	http = require('http').Server(app);

app.listen(app.get('port'), function(){
	console.log('Servidor certo');
});