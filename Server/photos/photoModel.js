var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
 
 location: String,
 activity: String,
 description: String,
 userName: String,
 imagePaths: String

});

module.exports = mongoose.model('photoDB', photoSchema);

