app.controller('getMovies', ['$http', function($http){
  var vm = this;
  vm.movieArr = [];
  vm.retrieve = function(title) {
    titleParse(title);
    vm.movieArr = [];
    $http.get('http://www.omdbapi.com/?s='+title+'&r=json').success(function(data){
      for (var j = 0; j < data.Search.length - 1; j++) {
        var newMovie = {};
        newMovie = data.Search[j];
        console.log(newMovie);
        vm.movieArr.push(newMovie);
      }
    })
  };
}])
