var app = angular.module('OMDBMod');

app.controller('searchController', function($scope, $http) {

    //initialize variable to store results on API call in
    $scope.movieData;

    //initialize variable to store hide or show class for movie display
    $scope.hideShowClass = 'hiddenArticle';

    //initialize variable to store hide or show class for error display
    $scope.hideShowClassError = 'hiddenError';

    //initialize variable to store hide or show class for blank palceholder
    $scope.hidePlaceholder = false;

    //function called on user search that takes the input
    $scope.userSearch = function(input) {

        //hide placeholder on search
        $scope.hidePlaceholder = true;


        //API call that appends user input to URL to search OMDb
        $http.get('http://www.omdbapi.com/?t=' + input)
            .then(function(response) {

                //saving JSON object to movieData variable
                $scope.movieData = response.data;

                //if there is no results to the search change class on results to hidden again
                //and reveal error message
                if ($scope.movieData.Response === 'False') {
                    $scope.hideShowClassError = '';
                    $scope.hideShowClass = 'hiddenArticle';

                    //if there are results for the search hide error message and show results
                } else {
                    $scope.hideShowClassError = 'hiddenError';
                    $scope.hideShowClass = '';
                }

            });
    };



});
