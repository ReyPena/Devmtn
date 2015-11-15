angular.module("apiApp").service("mainService", function($http){
  var baseUrl = "http://bird-api.com//api/birds"

  this.getBirds = function(){
    var promise = $http({
      method: "GET",
      url: baseUrl
    })
    // here is the promise
    promise.then(function(response) {
      return response.data;
    })
    return promise;
  }
  // this is the end of the code 
})
