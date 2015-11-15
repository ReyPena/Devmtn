angular.module("directivePractice")
.directive("dirDisplay", function () {
  function link (scope, element, attrs) {
    element.on("click", function () {
      scope.toggle = !scope.toggle;
      scope.$apply();
    })
  }
  return {
    templateUrl: "app/dirDisplayTmpl.html",
    link: link
  };
});
