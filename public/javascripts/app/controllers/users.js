
app.controller('BaseUserController', ['$scope', ($scope) => {
  console.log('BaseUserController');
}])

.controller('UserListController', ['$scope', 'UserService', function($scope, UserService) {
  console.log('UserListController');
  $scope.users = UserService.query();
}])

.controller('UserDetailController', ['$scope', ($scope) => {
  console.log('UserDetailController');
}])
