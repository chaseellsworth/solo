var photoModel = require('./photoModel.js');
var path = require('path');
var fs = require('fs');
var Q = require('q');
// var Photo = require('./linkModel.js');
// var Q = require('q');
// var util    = require('../config/utils.js');

  
module.exports = {

  //ADD THE PATHS TO STORE THE STUFF AND GET THE STUFF

  //ADD FS WRITEFILE FUNCTION TO CREATE NEW FS FILE WITH POST SAVED AS OBJECT OR APPEND EXISTING FILE
  addPhoto: function(req, res, next){
    
    photoModel.create(req.body, function(error, data){
      if (error) {
        res.send(500);
      }else{
        res.send(data);
      }
    })
  },

  getPhotos: function(req, res, next){
    photoModel.find( function(error, data){
      if (error) {
        res.send(500);
      }else{
        res.send(data);
      }
    })
  }

};
  
