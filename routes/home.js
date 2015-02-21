var express = require('express')
,	router = express.Router()
, 	controller = require('../controllers/home');

router.get('/', controller.index);

router.get('/view', function(req, res){
	res.render('view');
});

module.exports = router;