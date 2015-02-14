var express = require('express')
,	router = express.Router()
, 	controller = require('../controllers/home');

router.get('/', controller.index);

module.exports = router;