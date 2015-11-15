angular.module("rtfmApp").service("threadService", function () {
    this.getThreads = function () {
      return new firebase(fb.url + "/threads");
    };
    this.getThread = function () {
      return new firebase(fb.url + "/threads/" + threadId);
    };
    this.getComments = function (threadId) {
      return new firebase(fb.url + "/threads/" + threadId + "/comments/");
    };

})
