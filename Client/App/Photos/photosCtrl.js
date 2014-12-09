angular.module('TravelFilter.PhotosController', [])

.controller('PhotosController', [ '$base64', '$scope', '$location', 'PhotosFactory', '$http', '$upload', function ($base64, $scope, $location, PhotosFactory, $http, $upload){
	$scope.imageUploads = [];
	$scope.abort = function(index){
		$scope.upload[index].abort();
		$scope.upload[index] = null;
	};

	



	//   $scope.$watch('files', function() {
	//     for (var i = 0; i < $scope.files.length; i++) {
	//       var file = $scope.files[i];
	//       $scope.upload = $upload.upload({
	//         url: 'api/photos', // upload.php script, node.js route, or servlet url
	//         method: 'POST',
	//         //headers: {'Authorization': 'xxx'}, // only for html5
	//         //withCredentials: true,
	//         data: {myObj: $scope.myModelObj},
	//         file: file, // single file or a list of files. list is only for html5
	//         //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)        //fileFormDataName: myFile, // file formData name ('Content-Disposition'), server side request form name
	//                                     // could be a list of names for multiple files (html5). Default is 'file'
	//         //formDataAppender: function(formData, key, val){}  // customize how data is added to the formData. 
	//                                                             // See #40#issuecomment-28612000 for sample code

	//       }).progress(function(evt) {
	//         console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
	//         console.log(evt);
	//         console.log(evt.config);
	//         console.log(evt.config.data);
	//         console.log(evt.config.file);
	//       }).success(function(data, status, headers, config) {
	//         // file is uploaded successfully
	//         console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
	//       });
	//       //.error(...)
	//       //.then(success, error, progress); // returns a promise that does NOT have progress/abort/xhr functions
	//       //.xhr(function(xhr){xhr.upload.addEventListener(...)}) // access or attach event listeners to 
	//                                                               //the underlying XMLHttpRequest
	//     }
	// });
	//     /* alternative way of uploading, send the file binary with the file's content-type.
	//        Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed. 
	//        It could also be used to monitor the progress of a normal http post/put request. 
	//        Note that the whole file will be loaded in browser first so large files could crash the browser.
	//        You should verify the file size before uploading with $upload.http().
	//     */
	//     // $scope.upload = $upload.http({...})  // See 88#issuecomment-31366487 for sample code.



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