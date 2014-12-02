angular.module('TravelFilter.photos', [])

.controller('PhotosController', function ($base64, $scope, $location, Photos, $http){
	
	//GET PHOTOS
	// $scope.data = {};
	// Photos.getPhotos().then(function(results){
	// 	$scope.data.images = results;
	// });

	//ADD PHOTOS
	$scope.post = {};
	console.log('1');
	$scope.addPhoto = function(){
	console.log('2');
		Photos.addPhoto($scope.post.location, $scope.post.activity, $scope.post.description, $scope.post.imageData );
	console.log('3');
		};

});

//using base64
// $scope.encoded = $base64.encode(???);
// $scope.decoded = $base64.decode(???);