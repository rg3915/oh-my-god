var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./config/db');
var eauth = require('everyauth');

var app = require('./config/express')
,	db  =  require('./config/db')('mongodb://127.0.0.1/cee')
, 	http = require('http').Server(app);

app.listen(app.get('port'), function(){
	console.log('Servidor certo');
});