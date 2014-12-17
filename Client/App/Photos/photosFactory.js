angular.module('TravelFilter.photosFactory', [])

.factory('photosFactory', ['$http', function ($http){

  var location = '';

  var activity = '';

  var description = '';

  var imagePaths = [];  

  var getPhotos = function(){
		console.log('$$$$$$$$$$$$$$$$$$$$$$$');

		return $http({
      		method: 'GET',
      		url: '/api/photos'
  	  })
    	.then(function(results) {
    		// console.log(results);
    		console.log('$$$$$$$$$$$$$$$$$$$$$$$');
    		console.log(results.data);
      	return results.data;
    	})
    	.catch(function(error) {
      	console.log(error);
  	  });
	};

  var addPhotos = function(location, activity, description, userName, imagePaths){
    
    return $http({
      method: 'POST',
      url: '/api/photos/addPhotos',
      data: {userName: userName, location: location, activity: activity, description: description, imagePaths: imagePaths}
    })
  }


	return {
    location: location,
    activity: activity,
    description: description,
    imagePaths: imagePaths,
		getPhotos: getPhotos,
    addPhotos: addPhotos
	};

}]);

