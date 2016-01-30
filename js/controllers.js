app.controller('getMovies', ['$http', function($http){
  var vm = this;
  vm.movieArr = [];
  vm.retrieve = function(title) {
    titleParse(title);
    vm.movieArr = [];
    $http.get('http://www.omdbapi.com/?s='+title+'&tomatoes=true&r=json').success(function(data){
      console.log(data);
      for (var j = 0; j < data.Search.length - 1; j++) {
        var newMovie = {};
        newMovie = data.Search[j];
        // console.log(newMovie);
        vm.movieArr.push(newMovie);
      }
    })
  };
}])

//TRYING TO CREATE A CONTROLLER TO SHOW OR HIDE THE EXTRA MOVIE INFO ON CLICK OR ON THE BACK BUTTON CLICK

app.controller('popUp', ['$http', function($http) {
  var vm = this;
  vm.retrieve = function(title) {
    titleParse(title);
  }
}])
