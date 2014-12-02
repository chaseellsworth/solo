var path = require('path');
var fs = require('fs');
// var Photo = require('./linkModel.js');
// var Q = require('q');
// var util    = require('../config/utils.js');

module.exports = {

  //ADD THE PATHS TO STORE THE STUFF AND GET THE STUFF
  path: {
    'siteAssets' : path.join(__dirname, '../web/public'),
    'archivedSites' : path.join(__dirname, '../archives/sites'),
    'list' : path.join(__dirname, '../archives/sites.txt')
  },

  //ADD FUNCTIONALITY TO CONVERT IMAGE TO DATA
  convertImage: function(){

  },

  //ADD FS WRITEFILE FUNCTION TO CREATE NEW FS FILE WITH POST SAVED AS OBJECT OR APPEND EXISTING FILE
  addPhoto: function(){

  },

  //ADD ABILITY TO READ AND RETURN DATA FROM FS FILES

};
