var express = require('express')
, 	app = express()
,	bodyParser = require('body-parser')
, 	methodOverride = require('method-override')

, 	routes = {
		main: 	require('../routes/main'),
		partials: 	require('../routes/partials')
	}
	
,	api = {
		task: require('../routes/api/task')
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
app.use('/', routes.main);
app.use('/partials', routes.partials);

	// Rotas da API
app.use('/api/task', api.task); // Rotas da API para user's

module.exports = app;