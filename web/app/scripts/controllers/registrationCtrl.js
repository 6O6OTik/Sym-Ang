'use strict';

angular.module('prApp')
    .controller('registrationCtrl',
    ['$scope','$rootScope', '$location', 'registrationService',
        function ($scope, rootScope, $location, registrationService){

            registrationService.ClearCredentials();

            $scope.regUserSub = function(){
                $scope.dataLoading = true;
                registrationService.Registration($scope.username,$scope.password, $scope.email, function(response){
                    if(response.success){
                        $location.path('/login');

                    } else {
                        $scope.error = response.message;
                        $scope.dataLoading = false;
                    }
                });
            }
        }
    ]
);


