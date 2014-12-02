angular.module('TravelFilter.photos', [])

.controller('PhotosController', function ($base64, $scope, $location, Photos, $http){
	$scope.data = {};
	Photos.getPhotos().then(function(results){
		$scope.data.images = results;
	});

	$scope.post = {};
	$scope.addPhoto = function(){
		Photos.addPhoto($scope.post).then(function(results){
			$location.path('/???');
		});
	};
});

//using base64
$scope.encoded = $base64.encode(???);
$scope.decoded = $base64.decode(???);