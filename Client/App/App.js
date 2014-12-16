
angular.module('TravelFilter', [
'ui.router',
'angularFileUpload',
'TravelFilter.AuthController',
'TravelFilter.authFactory',
'TravelFilter.photosFactory',
'TravelFilter.PhotosController'
])

.config(function($stateProvider, $urlRouterProvider){   
  
  $urlRouterProvider.otherwise('/signin');

  $stateProvider
    .state('photos', {
      url: '/photos',
			templateUrl: 'app/Photos/photos.html',
			controller:  'PhotosController'
		})
    .state('signin', {
      url: '/signin',
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    
    // .state('signup', {
    //   url: '/signup',
    //   templateUrl: 'app/auth/signup.html',
    //   controller: 'TravelFilter.auth'
    // })
    
});
