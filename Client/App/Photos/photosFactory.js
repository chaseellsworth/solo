angular.module('TravelFilter.PhotosFactory', [])

.factory('PhotosFactory', ['$http', function ($http){

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
		getPhotos: getPhotos
	};

}]);

