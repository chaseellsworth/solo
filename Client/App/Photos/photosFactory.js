angular.module('TravelFilter.PhotosFactory', [])

.factory('PhotosFactory', ['$http', '$base64', function ($http, $base64){

	var addPhoto = function(location, activity, description, image){
		
		var encoded = $base64.encode(image);
		
		var postData = {
			location: location,
			activity: activity,
			description: description,
			image: encoded
		}
		console.log('@@@@@@@@@@@@@@@@@@@');
		console.log(postData);
		
		return $http({
      		method: 'POST',
      		url: '/api/photos',
      		data: postData
    	})
    	.then(function (resp) {
      		return resp.data.token;
      		console.log(resp.data.token);
    	});

	};

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

	}

	return {
		addPhoto: addPhoto,
		getPhotos: getPhotos
	};

}]);

