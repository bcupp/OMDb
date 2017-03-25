var app = angular.module('OMDBMod');

app.controller('searchController', function($scope, $http) {

  $scope.movieData;

    $scope.userSearch = function(input){
      console.log(input);

    $http.get('http://www.omdbapi.com/?t='+input)
    .then(function(response) {
      console.log(response.data);
      $scope.movieData = response.data;

    });

  };


});
