var app = require('./config/express')
,	db  =  require('./config/db')('mongodb://guilherme:Guiferpa94@ds049651.mongolab.com:49651/omg')
, 	http = require('http').Server(app);

app.listen(app.get('port') || process.env.PORT, function(){
	console.log('Servidor certo');
});