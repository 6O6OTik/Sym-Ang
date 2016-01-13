'use strict';

angular.module('prApp')
    .controller('usersCtrl', ['$scope', '$rootScope', '$modal','loginService',
        function ($scope, $rootScope, $modal,loginService) {
            $scope.loginService = loginService;


console.log($scope);



            $scope.use = 'Иван';
            $scope.usss = 'Иван';
            //$scope.dates = [
            //    {
            //        'id': '1',
            //        'title': 'task 1',
            //        'body': 'bla-bla-bla',
            //        'status': 'low'
            //    },
            //    {
            //        'id': '2',
            //        'title': 'task 2',
            //        'body': 'la-la-la',
            //        'status': 'normal'
            //    },
            //    {
            //        'id': '3',
            //        'title': 'task 3',
            //        'body': 'bla-bla-blbla-bla-bla-bla-bla',
            //        'status': 'critical'
            //    },
            //    {
            //        'id': '4',
            //        'title': 'task 4',
            //        'body': 'bla-bla-bla 123',
            //        'status': 'low'
            //
            //    }
            //
            //];

            $scope.AddTask = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'addTaskUser.html',
                    controller: 'addTaskModelInstanceCtrl'
                })
            };
            $scope.viewTask = function (date) {
                var modalInstance = $modal.open({
                    templateUrl: 'viewTaskUser.html',
                    controller: 'viewTaskModelInstanceCtrl',
                    scope: $scope,
                    resolve: {
                        date: function () {
                            return date;
                        }
                    }
                });
            };
            $scope.deleteTask = function (date) {
                var modalInstance = $modal.open({
                    templateUrl: 'deleteTaskUser.html',
                    controller: 'deleteTaskModelInstanceCtrl',
                    scope: $scope,
                    resolve: {
                        date: function () {
                            return date;
                        }
                    }
                });
            };

            $scope.editTask = function (date) {
                var modalInstance = $modal.open({
                    templateUrl: 'editTaskUser.html',
                    controller: 'editTaskModelInstanceCtrl',
                    resolve: {
                        date: function () {
                            return date;
                        }
                    }
                });
            }


        }


    ])
    .controller('editTaskModelInstanceCtrl', ['$scope', '$modalInstance','date',
        function ($scope, $modalInstance, date) {
            $scope.date = date;



            $scope.AddTaskEnd = function () {
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }
    ])

    .controller('addTaskModelInstanceCtrl', ['$scope', '$modalInstance',
        function ($scope, $modalInstance) {


            $scope.AddTaskEnd = function () {
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }
    ])
    .controller('deleteTaskModelInstanceCtrl', ['$scope', '$modalInstance', 'date',
        function ($scope, $modalInstance, date) {
            $scope.date = date;

            $scope.AddTaskEnd = function () {
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }
    ])

    .controller('viewTaskModelInstanceCtrl', ['$scope', '$modalInstance', 'date',
        function ($scope, $modalInstance, date) {
            $scope.date = date;
            $scope.temp = {id: date.id, title: date.title, body: date.body, status: date.status};

            $scope.EndViewTaskEnd = function (date, temp) {
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }]);
