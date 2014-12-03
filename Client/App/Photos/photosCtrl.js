angular.module('TravelFilter.PhotosController', [])

.controller('PhotosController', [ '$base64', '$scope', '$location', 'PhotosFactory', '$http', function ($base64, $scope, $location, PhotosFactory, $http){
	
	//GET PHOTOS
	$scope.data = {};
	
	var results = PhotosFactory.getPhotos();
		$scope.data.photos = results;


	$scope.getPhotos = function(){
		var results = PhotosFactory.getPhotos();
		$scope.data.photos = results;
	
	};

	//ADD PHOTOS
	$scope.post = {};
	
	$scope.addPhoto = function(){
	
		PhotosFactory.addPhoto($scope.post.location, $scope.post.activity, $scope.post.description, $scope.post.imageData );
	
	};

}]);

//using base64
// $scope.encoded = $base64.encode(???);
// $scope.decoded = $base64.decode(???);