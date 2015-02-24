var router = require('express').Router();

router.get('/list', function(req, res){
	res.render('partials/list');
})

router.get('/task', function(req, res){
	res.render('partials/task');
})

router.get('/edit', function(req, res){
	res.render('partials/edit');
});

module.exports = router;