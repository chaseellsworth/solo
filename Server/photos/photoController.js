var photoModel = require('./photoModel.js');
var path = require('path');
var fs = require('fs');
var Q = require('q');
// var Photo = require('./linkModel.js');
// var Q = require('q');
// var util    = require('../config/utils.js');

  var storagePath: {
    
    'archivedPhotos' : path.join(__dirname, '../archives/userPhotos'),
    
  }

var actions = {

  //ADD THE PATHS TO STORE THE STUFF AND GET THE STUFF

  //ADD FS WRITEFILE FUNCTION TO CREATE NEW FS FILE WITH POST SAVED AS OBJECT OR APPEND EXISTING FILE
  addPhoto: function(req, res, next){
    
    fs.appendFile(storagePath.archivedPhotos, req.body, function(error){
      if (error) {
        throw  error;
      }else{
        console.log("the image was saved!")
      }
    })
    .then()
    .catch()

  },

  //ADD ABILITY TO READ AND RETURN DATA FROM FS FILES

};
