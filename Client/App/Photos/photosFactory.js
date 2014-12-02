angular.module('TravelFilter.photosFactory', [])


.factory('Photos', function($http){
	
	var paths = {
	  'siteAssets' : path.join(__dirname, '../web/public'),
	  'archivedSites' : path.join(__dirname, '../archives/sites'),
	  'list' : path.join(__dirname, '../archives/sites.txt')
	};

	var addPhoto = function(){
		

	var getPhoto = function(){

	//FOR WHEN I ADD DATABASE
	// var addPhoto = function(){
	// 	return $http({
	// 		method: 'POST',
	// 		url: ?????
	// 	})
	// 	.then(function(results){
	// 		return results.data;
	// 	})
	// 	.catch(function(error){
	// 		console.log(error);
	// 	})
	// };

	// var getPhoto = function(){

	// 	return $http({
	// 		method: 'GET',
	// 		url: ?????
	// 	})
	// 	.then(function(results){
	// 		return results.data;
	// 	})
	// 	.catch(function(error){
	// 		console.log(error);
	// 	})
	// };
})
