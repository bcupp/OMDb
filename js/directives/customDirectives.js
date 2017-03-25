var app = angular.module('OMDBMod');

//custom directive for footer
app.directive('footerDir', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"views/footerDir.html"
  };
});

//custom directive for search bar
app.directive('searchBar', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"views/searchBar.html"
  };
});

//custom directive for search results
app.directive('searchResults', function(){
  return{
    restrict:'EA',
    replace: false,
    templateUrl:"views/searchResults.html"
  };
});
