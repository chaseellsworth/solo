angular.module('TravelFilter.PhotosController', [])

.controller('PhotosController', [ '$base64', '$scope', '$location', 'PhotosFactory', '$http', function ($base64, $scope, $location, PhotosFactory, $http){
	
	//GET PHOTOS
	$scope.name = "chase";
	
	$scope.data = {};
	
	PhotosFactory.getPhotos().then(function(results){
		$scope.data = results;
		// console.log($scope.data);
		// console.log($base64.encode("DSCN0096.JPG"));
		// console.log($base64.decode($scope.data[0].image));
		var currentImage = $scope.data.image;
		var newImage = $base64.decode(currentImage);
		$scope.data.image = newImage;
	});
				// console.log(results);
				// console.log(angular.fromJson(results));
		// $scope.data.photos = results;
		// var image = $base64.decode($scope.data.photos.image);
		// $scope.data.photos.image = image;

	// var results = PhotosFactory.getPhotos();
	// 			console.log("1" + results);
	// 			console.log("2" +results.data);
	// 	$scope.data.photos = results;
	// 	var image = $base64.decode($scope.data.photos.image);
	// 	$scope.data.photos.image = image;

	$scope.getPhotos = function(){
		PhotosFactory.getPhotos().then(function(results){
			$scope.data = results;
			var currentImage = $scope.data.image;
			var newImage = $base64.decode(currentImage);
			$scope.data.image = newImage;
		});	
	};

	//ADD PHOTOS
	// $scope.post = {};
	$scope.addPhoto = function(image){
		
		PhotosFactory.addPhoto($scope.post.location, $scope.post.activity, $scope.post.description, image );
	
	};

}]);

//using base64
// $scope.encoded = $base64.encode(???);
// $scope.decoded = $base64.decode(???);