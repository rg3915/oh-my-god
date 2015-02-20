var controller = require('../controllers/user')
, 	router = require('express').Router();

router.get('/', function(req, res){
	res.render('user/retrive');
});

router.get('/:id', function(req, res){
	res.render('user/retriveById');
});

router.get('/create', function(req, res){
	res.render('user/create');
});

module.exports = router;