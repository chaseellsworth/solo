var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server = app.listen(3000, function(){
	
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Travel Filter app listening at http://%s:%s', host, port)

})

module.exports = app;