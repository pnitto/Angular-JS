'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
  $scope.images = [
    {'name':"snow field", 'image':'/images/snow-field.JPG'},
    {'name':"snow mountain", 'image':'/images/snow-mnt.jpeg'},
    {'name': "snow lake", 'image':'/images/snow-lake.jpeg'},
    {'name': "snow house", 'image': '/images/snow-house.jpeg'}
  ];
  $scope.selectedImg = {'src':$scope.images[0].image};
}]);
