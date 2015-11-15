var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data
      for(var i = 0;i < parsedResponse.length; i++){
        parsedResponse[i].first_name = "John"
        parsedResponse[i].last_name = "Lemon"
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
  // this the end and the closing braquets
});