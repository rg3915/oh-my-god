var router = require('express').Router()

, 	api = require('../../controllers/api/task')

	// Função que faz o callback de todas chamadas da API
, 	cbAPI = function(err, data, res){

	if(!err){
		res.json(data);
	}else{
		console.log(err);
	}
}

/*========================
		Rotas API
========================*/

//Rota que retorna os registros
router.get('/retrive', function(req, res){
	api.retrive(req, res, cbAPI);
});

// Rota que faz inseri um registro
router.post('/create', function(req, res){
	api.create(req, res, cbAPI);
});

// Rota que atualiza um registro de acordo com o seu :id
router.put('/:id/update', function(req, res){
	api.update(req, res, cbAPI);
})

// Rota que retorna apenas um registro específico de acordo com o seu :id
router.get('/:id/retriveById', function(req, res){
	api.retriveById(req, res, cbAPI);
})

// Rota que deleta um registro em específico de acordo com o seu :id
router.delete('/:id/delete', function(req, res){
	api.delete(req, res, cbAPI);
});

module.exports = router;