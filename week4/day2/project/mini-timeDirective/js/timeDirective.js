angular.module("timeApp")
.directive("showTime", function () {
  function link (scope, element, attrs){
    var currentTime = new Date();
    scope.time = currentTime.toString();
  }
  
  return{
    restrict: "E",
    template: "<div> The current time is {{time}} </div>",
    link: link
  }
});
