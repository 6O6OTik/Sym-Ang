'use strict';

angular.module('prApp')
    .controller('loginCtrl',
    ['$scope','$rootScope','$location', 'loginService',
    function ($scope,$rootScope, $location,loginService) {

        loginService.ClearCredentials();

        $scope.login = function(){
            $scope.dataLoading = true;
            loginService.Login($scope.username, $scope.password, function(response){
                if(response.success){
                    loginService.SetCredentials($scope.username, $scope.password);
                    $location.path('/user');
                    console.log($scope.username, $scope.password)
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });


        };


    }]);

