
angular.module('TravelFilter.AuthController', [])

	.controller('AuthController', ['$scope', '$state', 'authFactory', function($scope, $state, authFactory){

    $scope.authFactory = authFactory;
    $scope.currentUser = authFactory.currentUser;

    $scope.setCurrentUser = function(user){
      
      $scope.authFactory.setCurrentUser(user);

    };

  }])



