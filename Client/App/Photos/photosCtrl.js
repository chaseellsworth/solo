angular.module('TravelFilter.PhotosController', [])

.controller('PhotosController', [ '$base64', '$scope', '$location', 'PhotosFactory', '$http', '$upload', function ($base64, $scope, $location, PhotosFactory, $http, $upload){
	$scope.imageUploads = [];
	$scope.abort = function(index){
		$scope.upload[index].abort();
		$scope.upload[index] = null;
	};

	
	$scope.onFileSelect = function(files){
	    
    console.log($scope.title + Auth.currentUser);
    for(var i = 0; i < files.length; i++){
      var file = files[i];
                              console.log(file);
      $scope.upload = $upload.upload({
        method: 'POST',
        url:  'api/photos/',
        data: {
          prompt_id: $scope.imageId,
          user_id:   Auth.currentUser      
        },
        file: file
      })
      .progress(function(evt){
        // console.log(evt);
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total))
      })
      .success(function(data, status, headers, config){
        Edit.imageId.push(data);
        $scope.imageNamesToDisplay = Edit.imageId;
        console.log($scope.imageNamesToDisplay);
        console.log("Edit.imageId is: ", Edit.imageId);
                              console.log(status);
                              console.log(headers);
                              console.log(config);
        // $state.reload();                             ///fixes the issue of the content disappearing. What is the side affect of removing it??
      })
      .error(function(error){
        console.log('ERROR: '. error);
      })
    }
	}

	//GET PHOTOS
	$scope.name = "chase";
	
	$scope.data = {};
	
	PhotosFactory.getPhotos().then(function(results){
		$scope.data = results;
		var currentImage = $scope.data.image;
		var newImage = $base64.decode(currentImage);
		$scope.data.image = newImage;
	});

	$scope.getPhotos = function(){
		PhotosFactory.getPhotos().then(function(results){
			$scope.data = results;
			var currentImage = $scope.data.image;
			var newImage = $base64.decode(currentImage);
			$scope.data.image = newImage;
		});	
	};

	//ADD PHOTOS
	$scope.addPhoto = function(){
		
		PhotosFactory.addPhoto($scope.post.location, $scope.post.activity, $scope.post.description, $scope.data.image );
	
	};

}]);
	// $scope.post = {};

//using base64
// $scope.encoded = $base64.encode(???);
// $scope.decoded = $base64.decode(???);
		// console.log($scope.data);
		// console.log($base64.encode("DSCN0096.JPG"));
		// console.log($base64.decode($scope.data[0].image));
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