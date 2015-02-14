var router = require('express').Router()

, 	api = require('../controllers/user')

, 	cbAPI = function(err, data, res, path_render){
	
	if(!err){

		console.log("Success: \n" + data);

		res.render(path_render, {datas: data});

	}else{

		console.log("Error: \n" + err);

		res.status(500).send(err);
	}
}

// Rotas da API
router.get('/', function(req, res){
	api.retrive(req, res, 'users/retrive', cbAPI);
});

router.get('/create', function(req, res){
	res.render('user/create');
});

router.post('/create', function(req, res){
	api.create(req, res, null, cbAPI);
});

router.get('/update/:id', function(req, res){
	api.retriveById(req, res, 'user/update', cbAPI);
})

router.put('/update/:id', function(req, res){
	api.update(req, res, 'user/update', cbAPI);
})

router.get('/user/:id', function(req, res){
	api.retriveById(req, res, 'user/retriveById', cbAPI);
})

router.delete('/delete/:id', function(req, res){
	api.delete(req, res, 'user/delete', cbAPI);
});

module.exports = router;