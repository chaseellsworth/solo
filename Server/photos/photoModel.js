var mongoose = require('mongoose');

var photoSchema = new mongoose.Schema({
 location: String,
 activity: String,
 description: String,
 image: String
});

module.exports = mongoose.model('photoDB', photoSchema);

