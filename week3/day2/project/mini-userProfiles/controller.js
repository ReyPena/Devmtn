angular.module ("userProfiles").controller("mainController", function($scope, mainService){
  $scope.user = mainService.getUser();
  // this is the end of the controller
})
