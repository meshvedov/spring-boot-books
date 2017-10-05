(function () {
    var app = angular.module('booksList', []);
    app.controller('booksCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.base_url = "http://localhost:8080";
        $scope.search_name = "";
        $scope.from = 0;
        $scope.step = 10;
        $scope.page = 1;

        $http.get($scope.base_url + "/books?from=" + $scope.from + "&step=" + $scope.step + "&name=" + $scope.search_name)
            .success(function (response) {
                $scope.books = response;
            });
    }]);

    app.filter('checkmark', function(){
        return function(input){
            return input ? '\u2713' : '\u2718';
        }
    });
})();