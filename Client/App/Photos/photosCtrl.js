angular.module('TravelFilter.photos', [])

.controller('PhotosController', function ($scope, $location, Photos, $http){
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
