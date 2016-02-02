'use strict';

angular.module('prApp')
    .controller('loginCtrl',
    ['$scope','$rootScope','$location', 'loginService','$cookieStore',
    function ($scope,$rootScope, $location,loginService,$cookieStore) {

        loginService.ClearCredentials();

        $scope.login = function(){
            $scope.dataLoading = true;
            loginService.Login($scope.username, $scope.password, function(response){
                if(response.success){
                    loginService.SetCredentials($scope.username, $scope.password);
                    $cookieStore.put('userObj', response);

                    $location.path('/user');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });


        };


    }]);

