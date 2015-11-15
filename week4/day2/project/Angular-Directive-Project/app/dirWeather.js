angular.module("directivePractice")
.directive("dirWeather", function () {

  return {
    scope: {
      currentUser: '='
    },
    templateUrl: "app/dirWeather.html"
  }
});
