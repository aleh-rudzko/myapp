var app = angular.module('app', []);

app.controller('UsersController', ['$scope', function($scope) {
  console.log('UsersController');

  $scope.count = 0;

  $scope.increase = function() {
    console.log('increase');
    $scope.count += 1;
  }

  $scope.decrease = function() {
    console.log('decrease');
    $scope.count -= 1;
  }
}])
