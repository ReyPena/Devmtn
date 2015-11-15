angular.module("foodApp", [])
.controller("mainCtrl", function($scope){
  $scope.foods = [
    {
      name: "Cheeseburger",
      origin: "American",
      calories: 480,
      spicyRating: 2
    },
    {
      name: "Sushi",
      origin: "Japan",
      calories: 400,
      spicyRating: 3
    },
    {
      name: "Dorito Burritos",
      origin: "American"
      calories: 2800,
      spicyRating: 8
    }
  ]
})
