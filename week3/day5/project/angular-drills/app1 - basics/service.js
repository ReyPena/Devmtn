angular.module("app1").service("mainService", function(){
  var anArray= [
    "banana1",
    "banana2",
    "banana3",
    "banana4",
    "chimpanzeee"
  ];
  this.returnDataSomething = function(){
    return anArray
  };
})
