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

	// var getPhoto = function(image){

	// }

	return {
		addPhoto: addPhoto
		// getPhoto: getPhoto
	};

});

