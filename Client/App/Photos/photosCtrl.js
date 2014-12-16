angular.module('TravelFilter.PhotosController', [])

.controller('PhotosController', [ '$base64', '$scope', '$location', 'PhotosFactory', '$http', '$upload', function ($base64, $scope, $location, PhotosFactory, $http, $upload){
	$scope.imageUploads = [];
	$scope.abort = function(index){
		$scope.upload[index].abort();
		$scope.upload[index] = null;
	};

	
	$scope.onFileSelect = function(files){
	    
    // console.log($scope.title + Auth.currentUser);
    for(var i = 0; i < files.length; i++){
      var file = files[i];
                              console.log(file);
      $scope.upload = $upload.upload({
        method: 'POST',
        url:  'api/photos/',
        data: {
          prompt_id: "test",										//$scope.imageId,
          user_id:   "test"											//Auth.currentUser      
        },
        file: file
      })
      .progress(function(evt){
        // console.log(evt);
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total))
      })
      .success(function(data, status, headers, config){
        // Edit.imageId.push(data);
        // $scope.imageNamesToDisplay = Edit.imageId;
        // console.log($scope.imageNamesToDisplay);
        // console.log("Edit.imageId is: ", Edit.imageId);
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

	//ADD POST
	$scope.addPost	

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
}])

	