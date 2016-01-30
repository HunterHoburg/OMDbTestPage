app.controller('getMovies', ['$http', function($http){
  var vm = this;
  vm.movieArr = [];
  vm.retrieve = function(title) {
    titleParse(title);
    // vm.movieArr = [];
    $http.get('http://www.omdbapi.com/?s='+title+'&r=json').success(function(data){
      // console.log(data);
      for (var j = 0; j < data.Search.length - 1; j++) {
        var newMovie = {};
        newMovie = data.Search[j];
        vm.movieArr.push(newMovie);
      }
    })
  };
}])

//TRYING TO CREATE A CONTROLLER TO SHOW OR HIDE THE EXTRA MOVIE INFO ON CLICK OR ON THE BACK BUTTON CLICK

app.controller('popUp', ['$http', function($http) {
  var vm = this;
  vm.selectedIndex = 0;
  vm.movieArr = [];
  vm.retrieve = function(title) {
    if (vm.selectedIndex == 1) {
    vm.selectedIndex = 0;
  } else if (vm.selectedIndex == 0){
    vm.selectedIndex = 1;
  }
    vm.movieArr = [];
    titleParse(title);
    $http.get('http://www.omdbapi.com/?t='+title+'&plot=full&tomatoes=true&r=json').success(function(data){
      var newMovie = {};
      newMovie = data
      vm.movieArr.push(newMovie);
    })
  }
}])
