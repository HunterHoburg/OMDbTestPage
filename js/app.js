var app = angular.module('movieSearch', []);
var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');


//TODO: FINISH FUNCTION TO PARSE TITLE QUERIES

titleParse = function(title) {
  var titleArr = title.split('');
  for (var i = 0; i < titleArr.length; i++) {
    if (titleArr[i] == ' ') {
      titleArr[i] = '+';
    }
  }
  var newTitle = titleArr.join('');
}
