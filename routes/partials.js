var router = require('express').Router();

router.get('/list', function(req, res){
	res.render('partials/list');
})

router.get('/task', function(req, res){
	res.render('partials/task');
})

module.exports = router;