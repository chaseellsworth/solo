var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var dir = path.resolve(__dirname + '/../client')
var morgan = require('morgan');
var photoRouter = express.Router();
mongoose.connect('mongodb://localhost/photoDatabase');
// var db = require(./db);

//middleware will change 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// all the static assets will come from this directory, so it will look in the root for index.html
//morgan logs all the requests
app.use(morgan('dev'));
app.use(express.static(dir));
app.use('/api/photos', photoRouter);		

var server = app.listen(3000, function(){
	
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Travel Filter app listening at http://%s:%s', host, port)

})

require('./photos/photoRoutes')(photoRouter);