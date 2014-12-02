angular.module('TravelFilter.photos', [])

.controller('PhotosController', function ($base64, $scope, $location, Photos, $http){
	
	//GET PHOTOS
	$scope.data = {};
	
	$scope.getPhotos = function(){
	
		Photos.getPhotos();
	
	};

	//ADD PHOTOS
	$scope.post = {};
	
	$scope.addPhoto = function(){
	
		Photos.addPhoto($scope.post.location, $scope.post.activity, $scope.post.description, $scope.post.imageData );
	
	};

});

//using base64
// $scope.encoded = $base64.encode(???);
// $scope.decoded = $base64.decode(???);