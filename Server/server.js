var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var dir = path.resolve(__dirname + '/../client')
// var db = require(./db);

app.use(express.static(dir));

var server = app.listen(3000, function(){
	
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Travel Filter app listening at http://%s:%s', host, port)

})

// module.exports = app;