var app = angular.module('nbaRoutes');

// this controller needs to be injected the resolved data from the router
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

    // controller code
    $scope.teamData = teamData;
    $scope.newGame = {};
    $scope.showNewGameForm = false;
    $scope.toggleNewGameForm = function () {
      $scope.showNewGameForm = !$scope.showNewGameForm;
    };

    switch($stateParams.team) {
      case "utahjazz":
      $scope.homeTeam = "Utah Jazz";
      $scope.logoPath = "images/jazz-logo.png";
      break;

      case "losangeleslakers":  console.log($scope.teamData);
      $scope.homeTeam = "Los Angeles Lakers";
      $scope.logoPath = "images/lakers-logo.png";
      break;

      case "miamiheat":
      $scope.homeTeam = "Miami Heat";
      $scope.logoPath = "images/heat-logo.png";
      break;
    }

    $scope.submitGame = function () {
      newGame.homeTeam = $scope.homeTeam.split('').join('').toLowerCase();
      addNewGame($scope.newGame).then(function(){
        teamService.getTeamData($scope.newGame.homeTeam)
        .then(function(data){
          $scope.teamData = data;
          $scope.newGame ={};
          $scope.showNewGameForm = false;
        });
      });
    };

});
