'use strict';

angular.module('prApp')
    .controller('usersCtrl', ['$scope',  '$modal','UserPageFact','$cookieStore',
        function ($scope, $modal, UserPageFact,$cookieStore) {

            var userObj = $cookieStore.get('userObj');
            $scope.userName_1 = userObj.username;
            $scope.userName_2 = userObj.userId;


            $scope.logout = function(){
              $cookieStore.remove('userObj');
            };



            $scope.items = UserPageFact.userTaskInfo.fullTaskHistory({
                userId: $scope.userName_2
            });
            console.log(userObj);


            $scope.AddTask = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'addTaskUser.html',
                    controller: 'addTaskModelInstanceCtrl'
                });
                modalInstance.result.then(function (item) {
                    $scope.items.push(angular.copy(item));
                })
            };
            $scope.viewTask = function (item) {
                var modalInstance = $modal.open({
                    templateUrl: 'viewTaskUser.html',
                    controller: 'viewTaskModelInstanceCtrl',
                    scope: $scope,
                    resolve: {
                        item: function () {
                            return item;
                        }
                    }
                });
            };
            $scope.deleteTask = function (item) {
                var modalInstance = $modal.open({
                    templateUrl: 'deleteTaskUser.html',
                    controller: 'deleteTaskModelInstanceCtrl',
                    scope: $scope,
                    resolve: {
                        item: function () {
                            return item;
                        }
                    }
                });
            };

            $scope.editTask = function (item) {
                var modalInstance = $modal.open({
                    templateUrl: 'editTaskUser.html',
                    controller: 'editTaskModelInstanceCtrl',
                    resolve: {
                        item: function () {
                            return item;
                        }
                    }
                });
            }


        }


    ])
    .controller('editTaskModelInstanceCtrl', ['$scope', '$modalInstance','item','UserPageFact',
        function ($scope, $modalInstance, item,UserPageFact) {
            $scope.item = item;
            $scope.date = {id:item.id, taskTitle:item.taskTitle,taskBody:item.taskBody,taskStatus:item.taskStatus};


            $scope.EndViewTaskEnd = function (date,item) {
                UserPageFact.userTaskEdit.editTaskTable({
                    id : $scope.date.id,
                    taskTitle: $scope.date.taskTitle,
                    taskBody: $scope.date.taskBody,
                    taskStatus: $scope.date.taskStatus
                });
                angular.extend(item,date);
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }
    ])

    .controller('addTaskModelInstanceCtrl', ['$scope','$rootScope', '$modalInstance','UserPageFact','$cookieStore',
        function ($scope, $rootScope,  $modalInstance,UserPageFact,$cookieStore) {

            var userObj = $cookieStore.get('userObj');
            $scope.userName_2 = userObj.userId;

            $scope.AddTaskEnd = function () {
                UserPageFact.userTaskAdd.addTaskTable({
                    userId: $scope.userName_2,
                    taskTitle: $scope.item.taskTitle,
                    taskBody: $scope.item.taskBody,
                    taskStatus: $scope.item.taskStatus


                });

                $modalInstance.close($scope.item);
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }
    ])
    .controller('deleteTaskModelInstanceCtrl', ['$scope', '$modalInstance','UserPageFact', 'item',
        function ($scope, $modalInstance, UserPageFact, item) {

            $scope.item = item;



            $scope.EndViewTaskEnd = function (item) {
                UserPageFact.userTaskDelete.deleteTaskTable({userId: $scope.item.id});
                var index =$scope.items.indexOf(item);
                $scope.items.splice(index, 1);
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }
    ])

    .controller('viewTaskModelInstanceCtrl', ['$scope', '$modalInstance', 'item',
        function ($scope, $modalInstance, item) {
            $scope.item = item;
            //$scope.temp = {id: date.id, title: date.title, body: date.body, status: date.status};

            $scope.EndViewTaskEnd = function (date, temp) {
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss();
            };
        }]);
