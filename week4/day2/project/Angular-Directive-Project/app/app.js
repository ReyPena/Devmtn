var app = angular.module('directivePractice', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("home",{
      url: "/home",
      templateUrl:"app/homeTmpl.html",
      controller:"homeCtrl"
    });
    
  $urlRouterProvider
    .otherwise("/home");

//   $stateProvider
//     .state("home", {
//       url: '/',
//       templateUrl: "js/home/homeTmpl.html",
//       controller: "homeCtrl"
//     })
//     .state("settings", {
//       url:"/settings",
//       templateUrl: "js/settings/settingsTmpl.html"
//     })
//     .state("products", {
//       url: "/products/:id",
//       templateUrl: "js/products/productTmpl.html",
//       controller: "productsCtrl"
//     });
//   $urlRouterProvider
//     .otherwise("/");

});
