angular.module("rtfmApp",["firebase", "ui.router"])

.constant("fb", {
  url: "https://rtfmapp-demo.firebaseio.com/"
})

/////////////////////////////////////////////////

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state("/threads", {
      url: "/threads/:threadId",
      templateUrl: "threads/threads.html",
      controller: "threads/threadsCtrl.js",
      resolve: {
        theadsRef: function (threadService) {
        return threadService.getThreads();
      }}
    }),
    .state("thread",{
      url: "/thread/:threadId",
      templateUrl: "thread/threadTmpl.html",
      controller: "thread/threadCtrl.js",
      resolve:{
        threadRef: function (threadService, $stateParams) {
          return threadService.getThread($stateParams.threadId);
        }
        commentsRef: function (threadService, $stateParams) {
          return threadService.getComments($stateParams.threadId);
        }
      }
    })

  $urlRouterProvider
    .ortherwise("/threads")
})
