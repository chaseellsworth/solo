angular.module('TravelFilter.PhotosController', [])

.controller('PhotosController', ['$scope', '$location', 'photosFactory', 'authFactory' ,'$http', '$upload',  function ($scope, $location, photosFactory, authFactory, $http, $upload){
	
  $scope.imageUploads = [];
	$scope.abort = function(index){
		$scope.upload[index].abort();
		$scope.upload[index] = null;
	};


  $scope.photosFactory = photosFactory;
  $scope.authFactory = authFactory;
  console.log($scope.authFactory.currentUser);
	
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
        console.log(data);
        $scope.photosFactory.imagePaths.push(data);
        console.log($scope.photosFactory.imagePaths);
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
  $scope.addPhotos = function(location, activity, description){

    photosFactory.addPhotos(location, activity, description, $scope.authFactory.currentUser, $scope.photosFactory.imagePaths);

  }
	//GET PHOTOS
	$scope.post = {};
	
	$scope.getPhotos = function(){
    photosFactory.getPhotos()
    .then(function(results){
      console.log(results);
      results.forEach(function(post){
        if(post.imagePaths){
            post.imagePaths.split(',');
          }
        });
      $scope.posts = results;
	  });
  };

	// $scope.getPhotos = function(){
	// 	photosFactory.getPhotos().then(function(results){
	// 		$scope.data = results;
	// 		var currentImage = $scope.data.image;
	// 		var newImage = $base64.decode(currentImage);
	// 		$scope.data.image = newImage;
	// 	});	
	// };

}])

	