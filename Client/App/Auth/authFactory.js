angular.module('TravelFilter.authFactory', [])

  .factory('authFactory', [ '$state', function($state){
    
    var currentUser = '';
    
    var setCurrentUser = function(name){
      this.currentUser = name;
      $state.go('photos');
    };

    return {
      currentUser: currentUser,
      setCurrentUser: setCurrentUser
    };

  }])