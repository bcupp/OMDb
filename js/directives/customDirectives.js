var app = angular.module('OMDBMod');

app.directive('footerDir', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"views/footerDir.html"
  };
});

app.directive('searchBar', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"views/searchBar.html"
  };
});
