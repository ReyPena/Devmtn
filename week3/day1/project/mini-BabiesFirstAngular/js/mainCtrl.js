var app =  angular.module("friendsList");
app.controller("mainCtrl", ["$scope", function($scope) {
  $scope.name = "Rey";
  $scope.friends = ["Tom", "Charley", "Tim", "Phill", "Smiths"];
  $scope.addFriend = function () {
    $scope.friends.push($scope.target);
    $scope.target= "";
;  }

}]);
