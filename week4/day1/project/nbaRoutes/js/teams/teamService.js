var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

    // service code
    this.addNewGame = function (gameObj) {
      var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;

      if (parseInt(gameObj.opponentScore) > parseInt(gameObj.homeTeamScore)) {
        gameObj.won = true;
      } else {
        gameObj.won = false;
      }
      $http({
        method: 'POST',
        url: url,
        data: gameObj
      })
    };

    this.getTeamData = function (team){
      var deferred = $q.defer();
      var url = 'https://api.parse.com/1/classes/' + team;

      $http({
        method: "GET",
        url: url
      }).then(function(data) {
        var result = data.data.results;
        var wins = 0;
        var losses = 0;
        for (var i = 0; i < result.length; i++) {
          if (result[i].won === true){
            wins += 1;
          } else {
            losses += 1;
          }
        };
        result.wins = wins;
        result.losses = losses;
        deferred.resolve(result)
        })
        return deferred.promise
    }


});
