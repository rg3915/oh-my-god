var express = require('express')
, 	app = express()
,	bodyParser = require('body-parser')
, 	methodOverride = require('method-override')

, 	routes = {
		home: 	require('../routes/home'),
		user: 	require('../routes/user')
	}
	
,	api = {
		user: require('../routes/api/user')
	}

//=========== Variáveis de ambiente ===========
app.set('views', './views');
app.set('view engine', 'jade');
app.set('port', 3000);

//=========== Middleware's =============
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use(express.static('./public'));
app.use(express.static('./public/dependences'));


//=========== Route's =============

	// Rotas da Aplicação
app.use('/', routes.home);
app.use('/user', routes.user);

	// Rotas da API
app.use('/api/user', api.user); // Rotas da API para user's

module.exports = app;