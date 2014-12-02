angular.module('TravelFilter.photosFactory', [])


.factory('Photos', function ($http, $base64){

	var addPhoto = function(location, activity, description, image){
		
		var encoded = $base64.encode(image);
		
		var postData = {
			location: location,
			activity: activity,
			description: description,
			image: encoded
		}

		console.log(postData);
		
		return $http({
      		method: 'POST',
      		url: '/api/photos',
      		data: postData
    	})
    	.then(function (resp) {
      		return resp.data.token;
    	});

	}

	var getPhotos = function(location, activity, description, image){
		
		return $http({
      		method: 'GET',
      		url: '/api/links'
    	})
      	.then(function(results) {
        	return results.data;
      	})
      	.catch(function(error) {
        	console.log(error);
      	});

	}

	return {
		addPhoto: addPhoto
		getPhoto: getPhotos
	};

});

