var opencaApp = angular.module('opencaApp', []);

opencaApp.controller('DeptDataCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.departments = data;
  });
}]);
