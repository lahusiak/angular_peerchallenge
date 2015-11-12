var myApp = angular.module("myApp", ['720kb.datepicker']);

//myApp.controller('firstController',  ["$scope", "$http", function ($scope, $http){
//    $scope.sortFilter;
//    $scope.nameArray = [];
//    $scope.getPeople = function(){
//        $http.get('/data').then(function(response){
//            $scope.nameArray = response.data;
//            //console.log("this is nameArray", $scope.nameArray);
//        })
//    };
//
//    $scope.sortByName = function(){
//        $scope.sortFilter = "name";
//        console.log($scope.sortFilter);
//
//    };
//
//    $scope.sortByLocation = function(){
//        $scope.sortFilter = "location";
//        console.log($scope.sortFilter);
//
//    };
//
//    $scope.sortByNumber = function(){
//        $scope.sortFilter = "favoriteNumber";
//        console.log($scope.sortFilter);
//
//    };
//
//    $scope.getPeople();
//
//}]);

myApp.controller('AppCtrl', ["$scope", function($scope) {
        $scope.myDate = new Date();
        //$scope.minDate = new Date(
        //    $scope.myDate.getFullYear(),
        //    $scope.myDate.getMonth() - 2,
        //    $scope.myDate.getDate());
        //$scope.maxDate = new Date(
        //    $scope.myDate.getFullYear(),
        //    $scope.myDate.getMonth() + 2,
        //    $scope.myDate.getDate());
        //$scope.onlyWeekendsPredicate = function(date) {
        //    var day = date.getDay();
        //    return day === 0 || day === 6;
        //}
    }]);

//['ngMaterial', 'ngMessages']

