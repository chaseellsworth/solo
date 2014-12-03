var photoModel = require('./photoModel.js');
var path = require('path');
var fs = require('fs');
var Q = require('q');
// var Photo = require('./linkModel.js');
// var Q = require('q');
// var util    = require('../config/utils.js');

  
module.exports = {

  addPhoto: function(req, res, next){
    
    //what is .create??
    //would normally use .save instead of .create 

    photoModel.create(req.body, function(error, data){
    // photoModel.create(req.body, function(error, data){
      console.log(req.body);
      if (error) {
        console.log('error')
        res.send(500);
      } else {
        console.log('success')
        res.send(data);
      }
    })
  },

  getPhotos: function(req, res, next){
    photoModel.find( function(error, data){
    // photoModel.find( function(error, data){
      if (error) {
        res.send(500);
      } else {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + data);
        res.send(data);
      }
    })
  }

};
  
