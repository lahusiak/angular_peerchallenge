var myApp = angular.module("myApp", []);

myApp.controller('firstController', ["$scope", "$http", function ($scope, $http){
    $scope.sortFilter;
    $scope.nameArray = [];
    $scope.getPeople = function(){
        $http.get('/data').then(function(response){
            $scope.nameArray = response.data;
            //console.log("this is nameArray", $scope.nameArray);
        })
    };

    $scope.sortByName = function(){
        $scope.sortFilter = "name";
        console.log($scope.sortFilter);

    };

    $scope.sortByLocation = function(){
        $scope.sortFilter = "location";
        console.log($scope.sortFilter);

    };

    $scope.sortByNumber = function(){
        $scope.sortFilter = "favoriteNumber";
        console.log($scope.sortFilter);

    };

    $scope.getPeople();

}]);

