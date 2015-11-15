var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
  $scope.getData =  mainService.getData();
  $scope.addData = mainService.addData;
  $scope.removeData = mainService.removeData;

});
