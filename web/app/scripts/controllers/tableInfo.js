'use strict';

angular.module('prApp')
    .controller('tableCtrl', ['$scope', '$rootScope', 'TableService', '$modal',
        function ($scope, $rootScope, TableService, $modal) {


            $scope.items = TableService.userTableInfo.infoTab();

            var items;
            $scope.new = {
                'name': '',
                'age': ''
            };



            $scope.eEdit = function (item) {

                var modalInstance = $modal.open({
                    templateUrl: 'editModalContent.html',
                    controller: 'editModalInstanceCtrl',
                    resolve: {
                        item: function () {
                            return item;
                        }

                    }
                })
            };

            $scope.eDelete = function (item) {

                var modalInstance = $modal.open({
                    templateUrl: 'addDel.html',
                    controller: 'delModelInstanceCtrl',
                    scope: $scope,
                    resolve: {
                        item: function () {
                            return item;
                        }
                    }
                });
            };


            $scope.newUser = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'addNewUser.html',
                    controller: 'nUserModalInstanceCtr'
                });
                modalInstance.result.then(function (item) {
                    $scope.items.push(angular.copy(item));
                })

            };
        }
    ])

    .controller('editModalInstanceCtrl', [ '$scope', 'TableService', '$modalInstance', 'item',
        function ($scope, TableService, $modalInstance, item) {
            $scope.item = item;
            $scope.temp = {id: item.id, name: item.name, age: item.age};
            $scope.eEditEnd = function (temp, item) {
                TableService.userTableEdit.editUserTable({
                    id: $scope.temp.id,
                    userName: $scope.temp.name,
                    userAge: $scope.temp.age
                });
                angular.extend(item, temp);
                $modalInstance.close();
            };
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }
    ])
    .controller('delModelInstanceCtrl', ['$scope', 'TableService', '$modalInstance', 'item',
        function ($scope, TableService, $modalInstance, item) {
            $scope.item = item;

            $scope.eDeleteEnd = function (item) {
                TableService.userTableDel.deleteUserTable({userId: $scope.item.id});
                var index = $scope.items.indexOf(item);
                $scope.items.splice(index, 1);
                $modalInstance.close();



            };
            $scope.cancel = function () {
                console.log('ng-click = cancel');
                $modalInstance.dismiss('cancel');
            };
        }
    ])
    .controller('nUserModalInstanceCtr', ['$scope', 'TableService','$modalInstance',
        function ($scope, TableService, $modalInstance) {

        $scope.eAddEnd = function () {
            TableService.userTableAdd.addUserTable({
                userId: $scope.item.id,
                userName: $scope.item.name,
                userAge: $scope.item.age
            });

            $modalInstance.close($scope.item);
        };
        $scope.cancel = function () {
            console.log('ng-click = cancel');
            $modalInstance.dismiss('cancel');
        };
    }]
);
