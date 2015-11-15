angular.module("apiApp").controller("myCtrl", function($scope, "mainService"){
  var promise = mainService.getBirds();

  promise.then(function(datafromA){
    $scope.birds = datafromA;
  })

})
