var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your methods you want to call in your controller need to be on 'this'.
  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in.
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
  this.getData= function(artist){
    var deferred = $q.defer();
    $http({
      method: "JSONP",
      url: "https://itunes.apple.com/search?term=" + artist + "&callback=JSON_CALLBACK"
    }).then(function(response){
      console.log("response", response);
      var parsedResponse = response.data.results;
      var arr = [];
      for (var i = 0; i < parsedResponse.length; i++) {

        // this make so if this is undefine then make it show freee  or if it have a dollar sing befoere

        if(parsedResponse[i].trackPrice == undefined){
          parsedResponse[i].trackPrice = "Free";
        }else{
          parsedResponse[i].trackPrice = "$ " + parsedResponse[i].trackPrice
        };

        // here im defining the key and set it so the value is the key of the ipa

        var artistObj = {
          Song: parsedResponse[i].trackName,
          AlbumArt: parsedResponse[i].artworkUrl30,
          Artist: parsedResponse[i].artistName,
          Collection: parsedResponse[i].collectionName,
          CollectionPrice: parsedResponse[i].trackPrice,
          Play: parsedResponse[i].previewUrl,
          Type: parsedResponse[i].kind
        }
        arr.push(artistObj)
      }
      deferred.resolve(arr)
    })
    return deferred.promise;
  }


  // this is the las braquets
});
